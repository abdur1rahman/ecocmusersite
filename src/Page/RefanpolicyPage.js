import React, {Component, Fragment} from 'react';
import Refunpolicy from "../Component/home/Refunpolicy";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import NavMObile from "../Component/common/NavMObile";

class RefanpolicyPage extends Component {
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
                <Refunpolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefanpolicyPage;