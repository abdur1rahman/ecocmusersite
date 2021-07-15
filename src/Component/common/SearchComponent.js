import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class SearchComponent extends Component {
    render() {
        let ProductData=this.props.ProductData;
        let SearchKey= this.props.SearchKey;
        let MyView=ProductData.map((ProductSearchc,i)=>{
            return <Col key={i.toString()} xl={2} lg={2} md={2} sm={4} xs-6>
                <Card className="imageBox card1">
                    <Link to={"/productdetails/"+ProductSearchc.produtcode}> <img src={ProductSearchc.image}/></Link>
                    <Card.Body>
                        <h1 className="productName">{ProductSearchc.title}</h1>
                        <p className="productPrice">{ProductSearchc.price} TK</p>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (
            <Fragment>

                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <p className="sectionTitle mt-5"> {SearchKey} </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className="mt-5">
                        <Row>
                            {MyView}
                        </Row>
                    </Container>
                </Fragment>

            </Fragment>
        );
    }
}

export default SearchComponent;