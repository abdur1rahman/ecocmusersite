import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import Order from "../Component/common/Order";
import NavMObile from "../Component/common/NavMObile";

class OrderPage extends Component {

    render() {
        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
                    <Order/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderPage;