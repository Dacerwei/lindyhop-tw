import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    render() {
        return (
            <Menu size="large" secondary borderless fluid>
                <Menu.Item><Link to="/">HOME</Link></Menu.Item>
                <Menu.Menu position="right" >
                    <Menu.Item><Link to="/about">ABOUT</Link></Menu.Item>
                    <Menu.Item><Link to="/portfolio">PORTFOLIO</Link></Menu.Item>
                    <Menu.Item><Link to="/class">CLASS</Link></Menu.Item>
                    <Menu.Item><Link to="/coop">COOP</Link></Menu.Item>
                    <Menu.Item><Link to="/events">EVENTS</Link></Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}