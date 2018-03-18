import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../containers/Layout'
import HomePage from '../containers/HomePage'
import AboutPage from '../containers/AboutPage'
import PortfolioPage from '../containers/PortfolioPage'
import ClassPage from '../containers/ClassPage'
import CoopPage from '../containers/CoopPage'
import EventsPage from '../containers/EventsPage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => (
            <Layout>
                <HomePage />
            </Layout>
        )} />
        <Route path="/about" component={() => (
            <Layout>
                <AboutPage />
            </Layout>
        )} />
        <Route path="/portfolio" component={() => (
            <Layout>
                <PortfolioPage />
            </Layout>
        )} />
        <Route path="/class" component={() => (
            <Layout>
                <ClassPage />
            </Layout>
        )} />
        <Route path="/coop" component={() => (
            <Layout>
                <CoopPage />
            </Layout>
        )} />
        <Route path="/events" component={() => (
            <Layout>
                <EventsPage />
            </Layout>
        )} />
    </Switch>
)

export default Routes;