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
    </Switch>
)

export default Routes;