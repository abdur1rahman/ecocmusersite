import React, {Component, Fragment} from 'react';
import Priviccy from "../Component/home/priviccy";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";

class PriviceyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                <Priviccy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PriviceyPage;