import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = (props) => {
    return (
        <div>
            <Nav homePage={props.homePage} />
            {props.children}
            <Footer />
        </div>
    )
};

export default Layout;

