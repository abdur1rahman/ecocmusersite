import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import axios from "axios";
import AppURL from "../Component/api/appURL";

class OrderPage extends Component {

    render() {
        return (
            <Fragment>
                <Nav/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderPage;