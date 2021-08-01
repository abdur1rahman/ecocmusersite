import React, {Component, Fragment} from 'react';
import Cocntact from "../Component/home/cocntact";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import NavMObile from "../Component/common/NavMObile";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
                <Cocntact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;