import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class Order extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col>
                            <h1 className='mt-5'>the order page</h1>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Order;