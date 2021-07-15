import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import About from "../Component/home/about";
import Nav from "../Component/common/Nav";
import BadcomNav from "../Component/common/BadcomNav";

class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <Nav/>
                <BadcomNav/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;