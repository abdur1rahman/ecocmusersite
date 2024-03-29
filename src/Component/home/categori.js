import React, {Component, Fragment} from 'react';
import {Card,Col,Container,Row} from "react-bootstrap";
import ProductItem from "../../asset/images/product.png";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";

class Categori extends Component {
    constructor() {
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        axios.get(AppURL.categori).then(response=>{

            this.setState({data:response.data})


        }).catch(error=>{

        })
    }

    render() {
        let mylist=this.state.data;
        let MyView = mylist.map((ParentList,i)=>{
            return   <Col key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6} className="mb-3">
                <Link to={"/ListByCategoriPage/"+ParentList.parentcategoriNameValue}>
                    <Card className=" card1">
                        <img src={ParentList.parentcategorImg} alt=""/>
                        <Card.Body>
                            <h1 className="productName">{ParentList.parentcategoriNameValue}</h1>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        })
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle">CATEGORIES</p>
                            <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true}className="mt-5">
                    <Row>
                        {MyView}

                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className=" card1">
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

export default Categori;