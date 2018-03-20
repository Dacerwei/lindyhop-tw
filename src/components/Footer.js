import React, { Component } from 'react'
import { Segment, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment textAlign="center">
                    <Link to="/">Naughty Swing</Link>
                </Segment>
                <Segment>
                    <Grid centered textAlign="center">
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/">HOME</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/about">ABOUT US</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/class">CLASSES</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/coop">CO-OP</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/events">EVENTS</Link>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment>
                    <Grid centered>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <Icon name='facebook official' size='big' />
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <Icon name='youtube play' size='big' />
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <Icon name='instagram' size='big' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment textAlign='center'>
                    <p>Contact Us : naughtyswingtw@gmail.com</p>
                    <p>Copyright © 2018 Naughty Swing. All rights reserved.</p>
                    <p>SITE BY CHINWEI HSU</p>
                </Segment>
            </Segment.Group>
        )
    }
}