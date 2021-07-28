import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListBySubCategori extends Component {


    render() {
        const MyList=this.props.ProductData;
        const SubCategory=this.props.SubCategory;


        const MyView=MyList.map((ProductList,i)=>{
            return <Col key={i.toString()} xl={2} lg={2} md={2} sm={4} xs-6>
                <Card className="imageBox card1">
                    <Link to={"/productdetails/"+ProductList.produtcode}><img src={ProductList.image}/></Link>
                    <Card.Body>
                        <h1 className="productName">{ProductList.title}</h1>
                        <p className="productPrice">{ProductList.price} TK</p>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="sectionTitle mt-5"> {SubCategory} </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="mt-5">
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ListBySubCategori;