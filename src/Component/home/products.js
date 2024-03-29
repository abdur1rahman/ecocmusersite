import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ProductItem from "../../asset/images/product.png";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";

class Products extends Component {
    constructor() {
        super();
        this.state={
            ProductData:[],
            loaderDiv:"true",
            mainDiv:"d-none"
        }
    }
    componentDidMount() {
        axios.get(AppURL.productListByRemark("new")).then(response=>{
            this.setState({ProductData:response.data,loaderDiv:"d-none",mainDiv:""});
        }).catch(error=>{
        })
    }

    render() {
        let productList = this.state.ProductData;
        let productViewList = productList.map((produtView,i)=>{
            return     <Col key={1} xl={2} lg={2} md={2} sm={6} xs={6} className="mb-3">
                <Card className="imageBox card1 mainDiv" >
                    <Link to={"/productdetails/"+produtView.produtcode}><img src={produtView.image} alt=''/></Link>
                    <Card.Body>
                        <h1 className="productName">{produtView.title}</h1>
                        <p className="productPrice">{produtView.price} TK</p>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle">FEATURED PRODUCTS</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center">
                    <h3 className={this.state.loaderDiv}>Loading...........</h3>
                </div>
                <Container fluid={true} className="mt-5">

                    <Row className={this.state.mainDiv}>

                        {productViewList}


                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="imageBox card1">
                                <img src={ProductItem} alt=""/>
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