import React, { Component } from 'react'
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        )
    }
}