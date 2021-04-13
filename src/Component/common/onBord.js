import React, {Component, Fragment} from 'react';
import {Form, Container, Row, Col, FormControl, Button, InputGroup} from 'react-bootstrap'

class OnBord extends Component {
    render() {
        return (
            <Fragment> 
                <Container fluid={true} className="text-center OnBoardStyle">
                    <Row className="text-center">
                        <Col lg={8} xl={8} md={8}sm={6}xs={6} className="m-0 pl-5 pt-5">
                            <InputGroup className="mb-2 mr-sm-2">
                                <FormControl id="inlineFormInputGroupUsername2" placeholder="Type Your Phone No.." />
                            </InputGroup>
                        </Col>
                        <Col lg={4} xl={4} md={4}sm={6}xs={6}className="m-0 pt-5">
                            <Form inline>
                                <Button type="submit" className="mb-2" className="m-0">Next</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default OnBord;