import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import productDetails from '../../asset/images/portfolio-05.jpg';
import sub1 from '../../asset/images/portfolio-08.jpg';
import sub2 from '../../asset/images/portfolio-09.jpg';
import sub3 from '../../asset/images/portfolio-08.jpg';
import sub4 from '../../asset/images/portfolio-05.jpg';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar,} from "@fortawesome/free-solid-svg-icons";
import {faShopify, faJediOrder} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}className='5' >
                           <img className='w-100 mt-5' src={productDetails} alt='image'/>
                           <div className='mt-4'>
                               <img className='w-25' src={sub1} alt='image'/>
                               <img className='w-25' src={sub2} alt='image'/>
                               <img className='w-25' src={sub3} alt='image'/>
                               <img className='w-25' src={sub4} alt='image'/>
                           </div>

                           <h6>DETAILS</h6>
                           <p>this exclosiv product very nice over confidential 100% guarnty madin jpan
                           modern technology
                           </p>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <h4 className='mt-5'>Woalton Freez</h4>
                            <p>this exclosiv product very nice over confidential</p>
                            <div className='productDetailscard'>Regular Price</div><div className='productDetailscard'>50% Discount</div><div className='productDetailscard'>New Price 100</div>
                            <p className='colorChoose'>Choose color</p>
                            <Form>
                                 <input type='radio'/> Red  <input type='radio'/> Green  <input type='radio'/> Blue
                                <p className='colorChoose'>Choose Size</p>
                                <input type='radio'/> XL <input type='radio'/> XX <input type='radio'/> M <br/>
                                `<p>Quantity</p>
                                <input type='number'/> <br/><br/>
                                <Link to='/order' className='btn btn-danger btn-sm m-2 p-2' > <FontAwesomeIcon icon={faShopify}/> Add to Card </Link>
                                <Link to='/order'  className='btn btn-success btn-sm m-2 p-2'  ><FontAwesomeIcon icon={faJediOrder}/> Order Now </Link>
                                <Link to='/feverite' className='btn btn-success btn-sm m-2 p-2'><FontAwesomeIcon icon={faHeart}/> Favourite </Link>
                            </Form>
                            <h6 className='mt-3'>REVIEW</h6>
                            <h5 className=''>
                                Abdur Rahman
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                             </h5>
                            <p>Lorem icocn dolar site responsive qality full web site Lorem icocn dolar site responsive qality full web site </p>
                            <h5 className=''>
                                Abdur Rahman
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </h5>
                            <p>Lorem icocn dolar site responsive qality full web site Lorem icocn dolar site responsive qality full web site </p>



                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;