import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ProductItem from "../../asset/images/portfolio-09.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";
class Callection extends Component {
    constructor() {
        super();
        this.state={
            callectionData:[]
        }
    }
    componentDidMount() {
        axios.get(AppURL.productListByRemark('callection')).then(response=>{
            this.setState({callectionData:response.data})
        }).catch(error=>{

        });
    }

    render() {
        let callectionList=this.state.callectionData;
        let CallectionView = callectionList.map((callectioData,i)=>{
            return    <Col key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                <Card className="imageBox card1">
                    <Link to={"/productdetails/"+callectioData.produtcode}><img src={callectioData.image}/></Link>
                    <Card.Body>
                        <h1 className="productName">{callectioData.title}</h1>
                        <p className="productPrice">{callectioData.price}</p>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (



            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle">COLLECTION</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="mt-5">
                    <Row>



                        {CallectionView}

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}className="mb-3">
                            <Card className="imageBox card1">
                                <Link to='/allcallection'> <img src={ProductItem}/></Link>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mb-3">
                            <Card className="imageBox card1">
                                <img src={ProductItem}/>
                                <Card.Body>
                                    <h1 className="productName">T-SHART</h1>
                                    <p className="productPrice">Price- 225 </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="imageBox card1">
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

export default Callection;