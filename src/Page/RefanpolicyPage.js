import React, {Component, Fragment} from 'react';
import Refunpolicy from "../Component/home/Refunpolicy";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";

class RefanpolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                <Refunpolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefanpolicyPage;