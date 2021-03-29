import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ProductItem from "../../asset/images/product.png";

class Products extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle">FEATURED PRODUCTS</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true}>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs-6>
                            <Card className="imageBox">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Products;