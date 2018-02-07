import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Nav from '../components/Nav'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => (
            <div>
                <Nav />
                <Home />
            </div>
        )} />
        <Route path="/about" component={() => (
            <div>
                <Nav />
                <About />
            </div>
        )} />
        <Route path="/portfolio" component={() => (
            <div>
                <Nav />
                <h1>about page</h1>
            </div>
        )} />
        <Route path="/class" component={() => (
            <div>
                <Nav />
                <h1>class page</h1>
            </div>
        )} />
        <Route path="/coop" component={() => (
            <div>
                <Nav />
                <h1>coop page</h1>
            </div>
        )} />
        <Route path="/events" component={() => (
            <div>
                <Nav />
                <h1>events page</h1>
            </div>
        )} />
    </Switch>
)

export default Routes;