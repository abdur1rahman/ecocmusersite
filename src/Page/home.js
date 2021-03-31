import React, {Component, Fragment} from 'react';
import Products from '../Component/home/products';
import {Card, Col, Container, Row} from "react-bootstrap";
import Categori from "../Component/home/categori";
import Callection from "../Component/home/callection";
import NewAraibal from "../Component/home/NewAraibal";
import Footer from '../Component/common/Footer';

class home extends Component {
    render() {
        return (
            <Fragment>
                <Products/>
                <Callection/>
                <Categori/>
                <NewAraibal/>
                <Footer/>
            </Fragment>
        );
    }
}

export default home;