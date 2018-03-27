import React, { Component } from 'react'
import { Segment, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group className="footer-wrapper">
                <Segment inverted color="black" textAlign="center" padded>
                    <Link to="/" className="footer-logo">Naughty Swing</Link>
                </Segment>
                <Segment inverted color="black">
                    <Grid centered textAlign="center">
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/" className="footer-item">HOME</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/about" className="footer-item">ABOUT US</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/portfolio" className="footer-item">PORTFOLIO</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/class" className="footer-item">CLASSES</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/coop" className="footer-item">CO-OP</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={16} tablet={2} computer={2}>
                            <Link to="/events" className="footer-item">EVENTS</Link>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment inverted color="black">
                    <Grid centered>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <a className="footer-social-icon" target="blank" href="https://www.facebook.com/nsintaiwan/"><Icon link name='facebook official' size='big' /></a>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <a className="footer-social-icon" target="blank" href="https://www.youtube.com/channel/UCOO0wsdVDe1KXN9t1ND6_Cw"><Icon link name='youtube play' size='big' /></a>
                        </Grid.Column>
                        <Grid.Column textAlign='center' mobile={2} tablet={2} computer={2}>
                            <a className="footer-social-icon" target="blank" href="https://www.instagram.com/naughtyswing/"><Icon link name='instagram' size='big' /></a>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment inverted color="black" textAlign='center'>
                    <p>Contact Us : naughtyswingtw@gmail.com</p>
                    <p>Copyright © 2018 Naughty Swing. All rights reserved.</p>
                    <p>Site By Chinwei Hsu</p>
                </Segment>
            </Segment.Group>
        )
    }
}