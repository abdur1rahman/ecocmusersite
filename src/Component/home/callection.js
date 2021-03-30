import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Callection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle">COLLECTION</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Callection;