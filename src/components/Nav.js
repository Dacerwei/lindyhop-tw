import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    render() {
        return (
            <Menu size="large" secondary borderless>
                <Menu.Item as="a" ><Link to="/">HOME</Link></Menu.Item>
                <Menu.Menu position="right" >
                    <Menu.Item as="a"><Link to="/about">ABOUT</Link></Menu.Item>
                    <Menu.Item as="a"><Link to="/portfolio">PORTFOLIO</Link></Menu.Item>
                    <Menu.Item as="a"><Link to="/class">CLASS</Link></Menu.Item>
                    <Menu.Item as="a"><Link to="/coop">COOP</Link></Menu.Item>
                    <Menu.Item as="a"><Link to="/events">EVENTS</Link></Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}