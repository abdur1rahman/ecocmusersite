import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppURL from "../api/appURL";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Order extends Component {
    constructor() {
        super();
        this.state={
            CartData:[],
            name:'',
            phone:'',
            city:'',
            pyment:'',
            delivery:'',
            orderRedirect:false,
            PageRefresh:false,
        }
    }
    componentDidMount() {
        axios.get(AppURL.cartItem).then(res=>{
          this.setState({CartData:res.data})
        }).catch(erro=>{
                toast.error("Internal server Error");
        })
    }
    
    nameOnChange=(event)=>{
        let namevalue= event.target.value;
        this.setState({name:namevalue})
    }
    PhoneOnChange=(event)=>{
        let phonevalue= event.target.value;
        this.setState({phone:phonevalue})
    }
    CityOnChange=(event)=>{
        let cityvalue= event.target.value;
        this.setState({city:cityvalue})
    }
    PymentOnChange=(event)=>{
         let pymentvalue= event.target.value;
        this.setState({pyment:pymentvalue})
    }
    DeliveryOnChange=(event)=>{
        let delivaryvalue= event.target.value;
        this.setState({delivery:delivaryvalue})
    }
    confirmOrder=(event)=>{
        event.preventDefault();
        let name=this.state.name;
        let phone= this.state.phone;
        let city= this.state.city;
        let pyment= this.state.pyment;
        let delivery= this.state.delivery;
        if(name.length===0){
            toast.error("Enter Your Name");
        }else if(phone.length===0){
            toast.error("Enter Your Phone");
        }else if(city.length===0){
            toast.error("Enter Your City");
        }else if(pyment.length===0){
            toast.error("Enter You Pyment");
        }else if(delivery.length===0){
            toast.error("Enter You delivery");
        }else {
            let MyFormData= new FormData();
            MyFormData.append('name',name);
            MyFormData.append('mobile',phone);
            MyFormData.append('city',city);
            MyFormData.append('paymentmathod',pyment);
            MyFormData.append('deliveryaddress',delivery);
            axios.post(AppURL.AddToOrder,MyFormData).then(response=>{
                if(response.data===1){
                    this.setState({orderRedirect:true})
                }else {
                    toast.error('order Add Fail');
                }
            }).catch(error=>{
                toast.error('500 Internal Server Error');
            });
        }
    }

 RemoveItem=()=>{
     axios.post(AppURL.delete).then(response=>{

         if(response.data===1){
            this.setState({PageRefresh:true})
         }else {
             toast.error('No Remove ')
         }
    }).catch(error=>{
        toast.error('500 Internal Server Error')
    })
 }
    PageRefresh=()=>{
        if(this.state.PageRefresh===true){
            let url= window.location.reload();
            return <Redirect to={url}/> ;
        }
    }

    render() {

        if(this.state.orderRedirect===true){

            return <Redirect to='/orderhistory'/>
        }

        let cartlist= this.state.CartData;

        let cartview=cartlist.map((cart,i)=>{
            return   <Row onClick={this.cartView} key={i.toString()} className="mt-2" >
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <img className='w-100' src={cart.img} alt=''/>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <h6> {cart.product_name} </h6>
                    <h6> Quantity={cart.product_quantity} </h6>


                    <h6> Price={cart.product_quantity} x {cart.unit_price} = {cart.total_price} TK </h6>

                   <button className='btn btn-sm btn-danger' onClick={this.RemoveItem} >
                       <FontAwesomeIcon   title='Remove Item' icon={faTrash}/>
                   </button>

                </Col>
            </Row>
        })

        return (

            <Fragment>
                <Container className='mt-5 pt-2' fluid={false}>
                   <h4 className='text-center mb-5'> ORDER PAGE</h4>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                            {cartview}

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                           <Form>
                               <h6 className=''>Your Name</h6>
                               <input onChange={this.nameOnChange} type='text'  className='form-control' placeholder='Enter Your Name'/>
                               <h6 className='mt-2'>Your Phone</h6>
                               <input onChange={this.PhoneOnChange} type='text' className='form-control' placeholder='Enter Your Phone'/>
                               <h6 className='mt-2'> Choose City </h6>
                               <select onChange={this.CityOnChange} className="form-control">
                                   <option >Choose City</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Cumilla" >Cumilla</option>
                                    <option value="Chitegong">Chitegong</option>
                                    <option value="Rajshay">Rajshay</option>
                               </select>
                               <h6 className='mt-2'> Choose Payment Method </h6>
                               <select onChange={this.PymentOnChange} className="form-control">
                                   <option >Choose Payment Method</option>
                                   <option value="CashOn">Cash On Delivery</option>
                                   <option value="PayOn" >Pay Now</option>
                               </select>
                               <h6>Delivery Address</h6>
                               <textarea onChange={this.DeliveryOnChange} className='form-control'> </textarea>
                               <Link onClick={this.confirmOrder} className='btn btn-success mt-2'>Confirm Order</Link>
                           </Form>
                        </Col>
                    </Row>
                    <ToastContainer/>
                </Container>
                {this.PageRefresh()}
            </Fragment>
        );
    }
}

export default Order;
