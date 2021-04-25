import React, {Component, Fragment} from 'react';
import Cocntact from "../Component/home/cocntact";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <Nav/>
                <Cocntact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;