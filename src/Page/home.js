import React, {Component, Fragment} from 'react';
import Products from '../Component/home/products';
import {Card, Col, Container, Row} from "react-bootstrap";

class home extends Component {
    render() {
        return (
            <Fragment>
                <Products/>
            </Fragment>
        );
    }
}

export default home;