import React, {Component, Fragment} from 'react';
import {Container, Row, Col}from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> SHARE LINK</p>
                            <Link className=" fab h1 m-1 "><FontAwesomeIcon icon={faTwitterSquare}/></Link>
                            <Link className=" fab h1 m-1 "><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                            <Link className=" fab h1 m-1 "><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> OFFICE ADDRES </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faSearchLocation}/></sapn> Dyara, Sharat Nagar, Adarsha Sadar,   <span className="p">&nsb &nsbbCumilla</span>  </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faPhone}/></sapn> 01861413646(Help Line) </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faEnvelope}/></sapn> adur1rahman46@gmail.Com</p>
                       
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">MOR INFO</p>
                            <Link to="/on" className="topFooter morinfoFooter"> About </Link>
                            <p className="topFooter morinfoFooter">Countact Au</p>
                            <p className="topFooter morinfoFooter">Our Team </p>
                            <p className="topFooter morinfoFooter">Refun policy</p>
                            <p className="topFooter morinfoFooter">Privacy policy</p>
                           
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">DOWNLOAD APP</p>

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