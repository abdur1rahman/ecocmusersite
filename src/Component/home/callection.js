import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";
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
            return    <Col key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6} className="mb-3">
                <Card className="imageBox card1">
                    <Link to={"/productdetails/"+callectioData.produtcode}><img src={callectioData.image} alt=""/></Link>
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
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Callection;