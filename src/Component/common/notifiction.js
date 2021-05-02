import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {Container,Row,Col} from "react-bootstrap";

class Notifiction extends Component {
    render() {
        return (
            <Fragment>
                <Container ClassName="mt-5" >
                    <Row>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5 pt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5 pt-5 sm pt-0 ">54Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#"> Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5 ">54Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#">Date: 27-4-2021 | status: unred </a>
                        </Col>
                        <Col lg={6} xl={6} sm={12} md={6} xs={12}>
                            <h5 className="mt-5">Lorem Ipsum is simply dummy text of the printing</h5>
                            <FontAwesomeIcon icon={faBell}/> <a href="#"> Date: 27-4-2021 | status: unred </a>
                        </Col>


                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Notifiction;