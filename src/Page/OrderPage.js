import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import axios from "axios";
import AppURL from "../Component/api/appURL";
import Order from "../Component/common/Order";

class OrderPage extends Component {

    render() {
        return (
            <Fragment>
                <Nav/>
                    <Order/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderPage;