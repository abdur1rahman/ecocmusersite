import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import productDetails from '../../asset/images/portfolio-05.jpg';

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                           <img className='w-100' src={productDetails}/>
                           <h3>DETAILS</h3>
                           <p>this exclosiv product very nice over confidential 100% guarnty madin jpan
                           modern technology
                           </p>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <h4>woalton Freez</h4>
                            <p>this exclosiv product very nice over confidential 100% guarnty madin jpan
                                modern technology
                            </p>
                            <div></div><div></div><div></div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;