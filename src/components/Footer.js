import React, { Component } from 'react'
import { Segment, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment textAlign="center">Naughty Swing</Segment>
                <Segment.Group horizontal>
                    <Segment textAlign='center'><Link to="/about">ABOUT US</Link></Segment>
                    <Segment textAlign='center'><Link to="/portfolio">PORTFOLIO</Link></Segment>
                    <Segment textAlign='center'><Link to="/class">CO-OP</Link></Segment>
                    <Segment textAlign='center'><Link to="/coop">CLASSES</Link></Segment>
                    <Segment textAlign='center'><Link to="/events">EVENTS</Link></Segment>
                </Segment.Group>
                <Segment>
                    <Grid centered columns={3}>
                        <Grid.Column textAlign='center' width={1}>
                            <Icon name='facebook official' size='big' />
                        </Grid.Column>
                        <Grid.Column textAlign='center' width={1}>
                            <Icon name='youtube play' size='big' />
                        </Grid.Column>
                        <Grid.Column textAlign='center' width={1}>
                            <Icon name='instagram' size='big' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment textAlign='center'>
                    <p>Contact Us : naughtyswingtw@gmail.com</p>
                    <p>Copyright © 2015 Naughty Swing. All rights reserved.</p>
                    <p>SITE BY CHINWEI HSU</p>
                </Segment>
            </Segment.Group>
        )
    }
}