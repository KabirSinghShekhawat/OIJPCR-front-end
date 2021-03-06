import { Component } from 'react'
import Header from '../components/Home/Header'
import LeftGrid from '../components/Home/LeftGrid'
import Topics from '../components/Home/SideBar/Topics'
import Popular from '../components/Home/SideBar/Popular'
import SubmitArticleForm from '../components/Home/SideBar/SubmitArticleForm'
import Podcast from '../components/Home/Podcast/Podcast'


class Home extends Component {
  render() {
    return (
      <div className="flex-grow max-w-7xl">
        <Header />
        <Main />
        <div className="mx-2 md:mx-8">
          <Podcast />
        </div>
      </div>
    )
  }
}

function Main() {
  return (
    <div className="flex flex-col px-2 md:flex-row md:px-4 md:mx-4">
      <LeftGrid />
      <SideBar />
    </div>
  )
}

function SideBar() {
  return (
    <div className="flex flex-col w-full mt-4 lg:w-1/4 md:w-1/3">
      <Topics />
      <Popular />
      <SubmitArticleForm />
    </div>
  )
}

export default Home