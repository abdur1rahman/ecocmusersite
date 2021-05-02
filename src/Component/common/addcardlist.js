import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import productDetails from '../../asset/images/portfolio-05.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Addcardlist extends Component {


    render() {
        return (
            <Fragment>

                <Container className='mt-5'>
                    <Row>
                        <Col md={4} lg={4} sm={12} md={4} xl={4} xs={4} className='mt-5'  >
                            <h5> Total Item</h5>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <h6>Total Pyment = 5000</h6>
                        </Col>
                        <Col md={4} lg={4} sm={12} md={4} xl={4} xs={4} className='mt-5'>
                            <Link to="/order" className='btn btn-success'>Checkout Now </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={4} sm={12} md={4} xl={4} xs={4} className='mt-5'  >
                            <img className='w-50' src={productDetails} alt='image'/>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <h5> PRODUCT NAME</h5>
                            <h6>Quantity=5</h6>
                            <h6>Price=05 x 100 = 500 TK</h6>
                        </Col>
                        <Col md={4} lg={4} sm={12} md={4} xl={4} xs={4} className='mt-5'>
                            <input type='number'/><br/><br/>
                            <Button className='btn btn-sm btn-danger'><FontAwesomeIcon icon={faTrash}/>Remove</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <img className='w-50' src={productDetails} alt='image'/>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <h5> PRODUCT NAME</h5>
                            <h6>Quantity=5</h6>
                            <h6>Price=05 x 100 = 500 TK</h6>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <input type='number'/><br/><br/>
                            <Button className='btn btn-sm btn-danger'><FontAwesomeIcon icon={faTrash}/>Remove</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <img className='w-50' src={productDetails} alt='image'/>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <h5> PRODUCT NAME</h5>
                            <h6>Quantity=5</h6>
                            <h6>Price=05 x 100 = 500 TK</h6>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <input type='number'/><br/><br/>
                            <Button className='btn btn-sm btn-danger'><FontAwesomeIcon icon={faTrash}/>Remove</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <img className='w-50' src={productDetails} alt='image'/>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <h5> PRODUCT NAME</h5>
                            <h6>Quantity=5</h6>
                            <h6>Price=05 x 100 = 500 TK</h6>
                        </Col>
                        <Col md={4} lg={4} sm={2} md={4} xl={4} xs={4} className='mt-5' >
                            <input type='number'/><br/><br/>
                            <Button className='btn btn-sm btn-danger'><FontAwesomeIcon icon={faTrash}/>Remove</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Addcardlist;