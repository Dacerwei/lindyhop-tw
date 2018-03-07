import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => (
            <div>
                <Nav />
                <Home />
                <Footer />
            </div>
        )} />
        <Route path="/about" component={() => (
            <div>
                <Nav />
                <About />
                <Footer />
            </div>
        )} />
        <Route path="/portfolio" component={() => (
            <div>
                <Nav />
                <h1>portfolio page</h1>
                <Footer />
            </div>
        )} />
        <Route path="/class" component={() => (
            <div>
                <Nav />
                <h1>class page</h1>
                <Footer />
            </div>
        )} />
        <Route path="/coop" component={() => (
            <div>
                <Nav />
                <h1>coop page</h1>
                <Footer />
            </div>
        )} />
        <Route path="/events" component={() => (
            <div>
                <Nav />
                <h1>events page</h1>
                <Footer />
            </div>
        )} />
    </Switch>
)

export default Routes;