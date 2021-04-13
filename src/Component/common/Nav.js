import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <p><Link to="/onbord">
                                hi
                            </Link></p>
                        </Col>
                        <Col>
hello
                        </Col>
                        <Col>
hello
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Nav;