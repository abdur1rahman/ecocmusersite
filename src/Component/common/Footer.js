import React, {Component, Fragment} from 'react';
import {Container, Row, Col}from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                    <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> SHARE LINK</p>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-pinterest-square"></i>
                            <i class="fab fa-instagram-square"></i>

                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> OFFICE ADDRES </p>
                            <p className="topFooter"> Dyara, Sharat Nagar, Adarsha Sadar, Cumilla </p>
                            <p className="topFooter">01861413646(Help Line) </p>
                            <p className="topFooter">adur1rahman46@gmail.Com</p>
                       
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">MOR INFO</p>
                            <p className="topFooter morinfoFooter"> About </p>
                            <p className="topFooter morinfoFooter">Countact Au</p>
                            <p className="topFooter morinfoFooter">Our Team </p>
                            <p className="topFooter morinfoFooter">Refun policy</p>
                            <p className="topFooter morinfoFooter">Privacy policy</p>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">DOWNLOAD APP</p>
                            <i class="fab fa-windows"></i>
                            <i class="fab fa-apple"></i>
                        </Col>
                    </Row>


                </Container>
                <Container fluid={true} className="sectionFooter text-center">
                    <Row>
                    <Col xl={12} lg={12} md={12} sm={12}xs={12}>
                            <p className="sectionFooterFont">Copy Right By Abdur Rahman @ Resrved 2021</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;