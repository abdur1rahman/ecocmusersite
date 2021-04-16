import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import About from "../Component/home/about";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;