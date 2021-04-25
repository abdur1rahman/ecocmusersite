import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import About from "../Component/home/about";
import Nav from "../Component/common/Nav";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;