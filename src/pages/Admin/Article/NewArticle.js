import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import axios from 'axios'
import EditorForm from '../../../components/Admin/EditorForm'
import { initEditor } from '../../../components/Admin/Config/TinyMCEConfig'
import config from '../../../config/config'
import { PopUp } from "../../../components/utils";
import { UserContext } from '../../../UserContext'
import { uploadMultipart } from '../utils'

class NewArticle extends Component {
  static contextType = UserContext

  constructor(props) {
    super(props)
    this.state = {
      editorRef: {},
      content: '',
      author: this.props.author || '',
      title: this.props.title || '',
      slug: this.props.slug || '',
      volume: this.props.volume || '',
      tags: this.props.tags || '',
      cover: this.props.cover || '',
      authorPhoto: this.props.authorPhoto || '',
      articleCoverImage: null,
      authorImage: null,
      notification: {
        show: false,
        msg: '',
      },
      token: '',
    }
  }

  componentDidMount() {
    this.setState({ token: this.context?.token })
  }

  handlePopUp = () => {
    this.setState(prevState => {
      return {
        notification: {
          show: !prevState.notification.show,
          msg: '',
        },
      }
    })
  }

  onFileChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.files[0] })
  }

  handleChange = (evt) => {
    this.setState(() => ({
      [evt.target.name]: evt.target.value,
    }))
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()

    if (!this.state.articleCoverImage) {
      this.setState({
        notification: {
          show: true,
          msg: 'Article cover image not uploaded',
        },
      })
      return
    }

    if (!this.state.authorImage) {
      this.setState({
        notification: {
          show: true,
          msg: 'Author profile photo not uploaded',
        },
      })
      return
    }

    if (this.state.content.length === 0) {
      this.setState({
        notification: {
          show: true,
          msg: 'Empty Article',
        },
      })
      return
    }

    const cover = await this.fileUpload(this.state.articleCoverImage)
    const authorPhoto = await this.fileUpload(this.state.authorImage)

    this.setState({
      cover: cover,
      authorPhoto: authorPhoto,
    })
    await this.PostData()
  }

  handleEditorChange = () => {
    this.setState({
      content: this.state.editorRef.getContent(),
    })
  }

  render() {
    const {
      content,
      articleCoverImage,
      authorImage,
      ...formState
    } = this.state

    return (
      <>
        <EditorForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onFileChange={this.onFileChange}
          isEdit={false}
          heading={'New Article'}
          {...formState}
        >
          <Editor
            onInit={this.onInit}
            onChange={this.handleEditorChange}
            init={{ ...initEditor }}
          />
        </EditorForm>
        {
          (this.state.notification.show) ?
            <PopUp
              heading={this.state.notification.msg}
              handlePopUp={this.handlePopUp}
              text=""
              buttonText=""
              buttonColor=""
            /> : ''
        }
      </>
    )
  }

  onInit = (evt, editor) => {
    this.setState({
      editorRef: editor,
    })
  }

  fileUpload = async (file) => {
    const url = `${config.host}admin/editor/uploadFile`
    const authToken = this.state.token
    return await uploadMultipart(file, { url, authToken })
  }

  PostData = async () => {
    try {
      const {
        editorRef,
        articleCoverImage,
        authorImage,
        ...data
      } = this.state

      const url = `${config.host}admin/editor/`

      const headerConfig = {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Content-Type': 'application/json',
        },
      }

      await axios.post(url, { ...data }, { ...headerConfig })

      this.setState({
        notification: {
          show: true,
          msg: 'Created new article',
        },
      })
    } catch (err) {
      this.setState({
        notification: {
          show: true,
          msg: 'Error: could not create new article',
        },
      })
    }
  }
}

export default NewArticle