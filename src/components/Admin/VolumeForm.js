import { Component } from 'react'
import {
  FormField,
  FormContainer,
  UploadFile,
  Button,
  ButtonGroup
} from "./Form";

class VolumeForm extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  onFileChange (evt) {
    this.props.onFileChange(evt)
  }

  handleDelete () {
    this.props.handleDelete()
  }

  handleSubmit (evt) {
    this.props.handleSubmit(evt)
  }

  handleChange (evt) {
    this.props.handleChange(evt)
  }

  render () {
    const {
            volume,
            about,
            date,
            isEdit  = false,
            heading = 'Submit Form',
          } = this.props
    return (
      <FormContainer heading={heading} handleSubmit={this.handleSubmit}>
        {/*Volume*/}
        <FormField name="volume" value={volume} label="Volume" handleChange={this.handleChange}
                   type="number"
                   min={0}
        />
        {/* Title */}
        <FormField name="date" value={date} label="Date" handleChange={this.handleChange}/>
        {/*About*/}
        <FormField name="about" value={about} label="About" handleChange={this.handleChange}/>

        <UploadFile onFileChange={this.onFileChange}/>
        {this.props.children}
        {
          isEdit
            ?
            <ButtonGroup
              handleSubmit={this.handleSubmit}
              handleDelete={this.handleDelete}
              deleteTxt="Delete Volume"
            />
            :
            <Button
              handleClick={this.handleSubmit}
              cname="primary-color-bg text-white"
            >
              Save Data
            </Button>
        }
      </FormContainer>
    )
  }
}

export default VolumeForm