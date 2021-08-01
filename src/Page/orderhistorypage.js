import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Orderhistory from "../Component/common/orderhistory";
import NavMObile from "../Component/common/NavMObile";
import Nav from "../Component/common/Nav";

class Orderhistorypage extends Component {
    render() {
        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
                <Orderhistory/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Orderhistorypage;