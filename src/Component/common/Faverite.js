import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import ProductItem from "../../asset/images/portfolio-09.jpg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


class Faverite extends Component {
    componentDidMount() {
       window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-5">
                            <p className="sectionTitle"> PAVERITE ITEME</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="mt-5">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1 text-center">
                                <Link to='/productdetails'><img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                    <Button className=' text-center btn btn-danger btn-sm' > <FontAwesomeIcon icon={faTrash}/> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Faverite;