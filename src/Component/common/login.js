import React, {Component, Fragment} from 'react';
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='contactBg mt-5'>
                    <Row>
                        <Col lg={6} xl={6} md={6} sm={12} xs={12} className='contactStyle'>
                            <Form >
                                <FormControl typ='text 'className='contactType' placeholder="type your Phone"/>
                                <button className='btn btn-success btn-block  contactType'>send</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Login;