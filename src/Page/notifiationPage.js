import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Notifiction from "../Component/common/notifiction";
import Footer from "../Component/common/Footer";

class NotifiationPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                <Notifiction/>
                <Footer/>
            </Fragment>
        );
    }
}

export default NotifiationPage;