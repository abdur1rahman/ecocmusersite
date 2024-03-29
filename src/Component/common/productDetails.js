import React, {Component, Fragment} from 'react';
import {Container, Row, Col,select, option} from "react-bootstrap";
import ReatDom from "react-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar,} from "@fortawesome/free-solid-svg-icons";
import {faShopify, faJediOrder} from "@fortawesome/free-brands-svg-icons";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProductDetails extends Component {
    constructor() {
        super();
        this.state={
            color:'',
            size:'',
            quantity:'',
            productCode:null,
            RedirectOrderpage:false,
        }
    }
    imageClick(event){
        let imgSrc=event.target.getAttribute('src');
        let privewImg=document.getElementById('privewImg');
        ReatDom.findDOMNode(privewImg).setAttribute('src',imgSrc);
    }

    onChangeColor=(event)=>{
        let ColorValue= event.target.value;
        this.setState({color:ColorValue});

    }
    onChangeSize=(event)=>{
        let SizeValue= event.target.value;
        this.setState({size:SizeValue});
    }

    onChangeQuantity=(event)=>{
        let quantityValue= event.target.value;
        this.setState({quantity:quantityValue});
    }

    AddToCart=(event)=>{
        let colorSelect= this.state.color;
        let sizeSelect= this.state.size;
        let quantitySelect= this.state.quantity;
        let productCodeSelect= this.state.productCode;
        if(colorSelect.length===0){
            toast.error("Pleace Select Yor Color")
        } else if(sizeSelect.length===0){
            toast.error("Pleace Select Yor Size")
        }else if(quantitySelect.length===0){
            toast.error("Pleace Select Yor Quantity")
        }else {
            let MyFormData= new FormData();
            MyFormData.append('color',colorSelect);
            MyFormData.append('size',sizeSelect);
            MyFormData.append('quantity',quantitySelect);
            MyFormData.append('produtcode',productCodeSelect);
            axios.post(AppURL.AddToCart,MyFormData).then(response=>{
                if(response.data===1){
                    this.setState({RedirectOrderpage:true});
                }else {
                    toast.error('Item Added Fail');
                }
            }).catch(error=>{
                toast.error('500 Internal Server Error')
            })
        }
    }
    render() {

        let ProductData=this.props.ProductData;
        let  title= ProductData['productlist'][0]['title'];
        let price= ProductData['productlist'][0]['price'];
        let specialprice= ProductData['productlist'][0]['specialprice'];
        let productcode= ProductData['productlist'][0]['produtcode'];

        let des= ProductData['productdetails'][0]['des'];
        let details= ProductData['productdetails'][0]['details'];
        let image= ProductData['productdetails'][0]['image1'];
        let image2= ProductData['productdetails'][0]['image2'];
        let image3= ProductData['productdetails'][0]['image3'];
        let image4= ProductData['productdetails'][0]['image4'];
        let color= ProductData['productdetails'][0]['color'];
        let size= ProductData['productdetails'][0]['size'];

        let colorArray= color.split(',');
        let colorOption = colorArray.map((colorList,i)=>{
            return <option value={colorList}>{colorList}</option>
        })
        let SizeArray = size.split(',');
        let sizeOption = SizeArray.map((sizeList,i)=>{
            return <option value={sizeList}>{sizeList}</option>
        })
        if(this.state.productCode===null){
            this.setState({productCode:productcode})
        }
         if(this.state.RedirectOrderpage===true){

             return <Redirect to='/order'/>
         }

        return (

            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}className='5'>
                           <img onClick={this.imag}  id="privewImg" className='w-100 mt-5' src={image} alt=''/>
                           <div className='mt-4'>
                               <div className="imagepoint"> <img onClick={this.imageClick} className='w-25' src={image} alt=''/> </div>
                               <div className="imagepoint"> <img className="imagepoint" onClick={this.imageClick} className='w-25' src={image2} alt=''/> </div>
                               <div className="imagepoint"> <img className="imagepoint" onClick={this.imageClick} className='w-25' src={image3} alt=''/> </div>
                               <div className="imagepoint"> <img className="imagepoint" onClick={this.imageClick} className='w-25' src={image4} alt=''/> </div>
                           </div>

                           <h6>  DETAILS </h6>
                           <p> {details} </p>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <h4 className='mt-5'>{productcode} {title}</h4>
                            <p> {des} </p>
                            <div className='productDetailscard'> Regular Price = {price} </div>
                            <div className='productDetailscard'> 50% Discount = {specialprice} </div>

                            <div className='m-3'>
                                <h6 className='clearboth'> Choose Color </h6>
                                <select onChange={this.onChangeColor } className="form-control form-select" >
                                    <option value="">Choose Color</option>
                                    {colorOption}
                                </select>
                            </div>
                            <div className='m-3'>
                                <h6> Choose Size </h6>
                                <select onChange={this.onChangeSize} className="form-control form-select" >
                                    <option value="">Choose size</option>
                                    {sizeOption}
                                </select>
                            </div>

                            <div className='m-3'>
                                <h6> Choose Quantity </h6>
                                <select onChange={this.onChangeQuantity} className="form-control form-select" >
                                    <option value="0" >Choose Quantity</option>
                                    <option value="01" >01</option>
                                    <option value="02" >02</option>
                                    <option value="03" >03</option>
                                    <option value="04" >04</option>
                                </select>
                            </div>
                                <div  onClick={this.AddToCart} className='btn btn-success btn-sm m-2 p-2' > <FontAwesomeIcon icon={faShopify}/> Add to Card </div>
                                <div  onClick={this.AddToCart}  className='btn btn-success btn-sm m-2 p-2'  ><FontAwesomeIcon icon={faJediOrder}/> Order Now </div>
                                <Link to='/feverite' className='btn btn-success btn-sm m-2 p-2'><FontAwesomeIcon icon={faHeart}/> Favourite </Link>
                            <h6 className='mt-3'>REVIEW</h6>
                            <h6 className='colorChoose'>
                                Abdur Rahman
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                             </h6>
                            <p>Lorem icocn dolar site responsive qality full web site Lorem icocn dolar site responsive qality full web site </p>
                            <h6 className=''>
                                Abdur Rahman
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                                <FontAwesomeIcon className='Revewstart' icon={faStar}/>
                            </h6>
                            <p>Lorem icocn dolar site responsive qality full web site Lorem icocn dolar site responsive qality full web site </p>
                        </Col>
                    </Row>
                    <ToastContainer/>
                </Container>

            </Fragment>
        );
    }
}

export default ProductDetails;