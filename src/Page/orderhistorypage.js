import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Orderhistory from "../Component/common/orderhistory";
import NavMObile from "../Component/common/NavMObile";

class Orderhistorypage extends Component {
    render() {
        return (
            <Fragment>
                <NavMObile/>
                <Orderhistory/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Orderhistorypage;