import React, {Component, Fragment} from 'react';
import {Col,Row,Container,Form, FormControl,Button} from "react-bootstrap";

class Cocntact extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <FormControl typ='text' placeholder="type your name"/>
                                <FormControl typ='text' placeholder="type your Phone"/>
                                <FormControl typ='text' placeholder="type your message"/>
                                <button className='btn btn-danger'>send</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Cocntact;