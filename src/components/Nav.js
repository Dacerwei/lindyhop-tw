import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Responsive, Icon, Sidebar, Image } from 'semantic-ui-react'
import nsLogo from '../statics/image/ns_logo.svg'
import PropTypes from 'prop-types'

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidebar: false,
            active: false
        };

        this.sidebarClicked = this.sidebarClicked.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        const { homePage } = this.props;
        const activeHeight = (homePage) ? window.innerHeight : 80;

        if (homePage) { }
        if (window.scrollY >= activeHeight) {
            this.setState({ active: true });
        } else {
            this.setState({ active: false });
        }
    }

    sidebarClicked() {
        const { showSidebar } = this.state;
        this.setState({ showSidebar: !showSidebar });
    }

    render() {
        const { showSidebar, active } = this.state;
        return (
            <Container>
                <Responsive {...Responsive.onlyComputer}>
                    <Menu size="large" secondary={!active} style={{ background: (!active) ? "" : "black" }} borderless fixed="top">
                        <Menu.Item><Link to="/"><Image src={nsLogo} size="tiny" centered /></Link></Menu.Item>
                        <Menu.Menu position="right" >
                            <Menu.Item><Link to="/about">ABOUT</Link></Menu.Item>
                            <Menu.Item><Link to="/portfolio">PORTFOLIO</Link></Menu.Item>
                            <Menu.Item><Link to="/class">CLASSES</Link></Menu.Item>
                            <Menu.Item><Link to="/coop">COOP</Link></Menu.Item>
                            <Menu.Item><Link to="/events">EVENTS</Link></Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Menu size="large" secondary={!active} style={{ background: (!active) ? "" : "black" }} borderless fixed="top">
                        <Menu.Item><Link to="/"><Image src={nsLogo} size="tiny" centered /></Link></Menu.Item>
                        <Menu.Menu position="right" >
                            <Menu.Item><Link to="/about">ABOUT</Link></Menu.Item>
                            <Menu.Item><Link to="/portfolio">PORTFOLIO</Link></Menu.Item>
                            <Menu.Item><Link to="/class">CLASSES</Link></Menu.Item>
                            <Menu.Item><Link to="/coop">COOP</Link></Menu.Item>
                            <Menu.Item><Link to="/events">EVENTS</Link></Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Menu size="large" fixed="top" secondary={!active} style={{ background: (!active) ? "" : "black" }}>
                        <Menu.Item header><Link to="/"><Image src={nsLogo} size="tiny" centered /></Link></Menu.Item>
                        <Menu.Item position="right" onClick={this.sidebarClicked}><Icon name='sidebar' size='big' color="orange" /></Menu.Item>
                    </Menu>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        width='thin'
                        direction='right'
                        visible={showSidebar}
                        icon='labeled'
                        vertical
                        inverted
                    >
                        <Menu.Item>
                            <Icon name='home' size='big' />
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="address card outline" size='huge' />
                            <Link to="/about">ABOUT</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="grid layout" size='huge' />
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="student" size='huge' />
                            <Link to="/class">CLASSES</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="group" size='huge' />
                            <Link to="/coop">COOP</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="calendar" size='huge' />
                            <Link to="/events">EVENTS</Link>
                        </Menu.Item>
                        <Menu.Item onClick={this.sidebarClicked}>
                            <Icon name="arrow right" size='huge' />
                            CLOSE
                        </Menu.Item>
                    </Sidebar>
                </Responsive>
            </Container>
        )
    }
}

Nav.protoTypes = {
    homePage: PropTypes.boolean,
};

Nav.defaultProps = {
    homePage: false
};