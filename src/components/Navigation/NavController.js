import {Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import EditorialBoard from '../../pages/EditorialBoard'
import Contact from '../../pages/Contact'
import Archive from '../../pages/Archive/Archive'
import SubmitArticle from '../../pages/SubmitArticle'
import React from 'react'
import Nav from './Nav'
import Footer from '../Footer/Footer'
import Tag from '../../pages/Topic/Tag'

const NavController = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <Nav/>
            <Switch>

                <Route exact path="/about" render={() => <About/>}/>

                <Route exact path="/editorialBoard" render={() => <EditorialBoard/>}/>

                <Route exact path="/contact" render={() => <Contact/>}/>

                <Route exact path="/tags/:tag" render={(props) => <Tag {...props}/>}/>

                <Route path="/archive"
                       render={(props) => <Archive {...props}/>}
                />

                <Route exact path="/submitArticle"
                       render={() => <SubmitArticle/>}
                />

                <Route exact path="/" render={() => <Home/>}/>

                <Route path="*">
                    <Redirect to="/notFound"/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default NavController