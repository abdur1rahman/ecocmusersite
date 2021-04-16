import React, {Component, Fragment} from 'react';
import Cocntact from "../Component/home/cocntact";
import Footer from "../Component/common/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <Cocntact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;