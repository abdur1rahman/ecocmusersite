import React, {Component, Fragment} from 'react';
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../api/appURL";
import {Redirect} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            phone:'',
            email:'',
            pageRedirect:false,
        }
    }
    onChangeUsername=(event)=>{
       let user= event.target.value;
        this.setState({username:user})

    }
    onChangePassword=(event)=>{
        let pass= event.target.value;
        this.setState({password:pass})
    }
    onChangePhone=(event)=>{
        let phoneNo= event.target.value;
        this.setState({phone:phoneNo})
    }
    onChangeEmail=(event)=>{
        let emailId= event.target.value;
        this.setState({email:emailId})
    }
    AddSignup=(evnet)=>{
        evnet.preventDefault();
        let user= this.state.username;
        let pass= this.state.password;
        let phoneNo= this.state.phone;
        let emaile= this.state.email;
        let MyFormData= new FormData();
        MyFormData.append('username',user);
        MyFormData.append('password',pass);
        MyFormData.append('phone',phoneNo);
        MyFormData.append('email',emaile);
        axios.post(AppURL.Signup,MyFormData).then(response=>{
            if(response.data===1){
                toast.success('Successfully account');
               this.setState({pageRedirect:true})
            }else {
                alert('500 Internal Server Errror')
            }
        }).catch(error=>{
            alert('500 Internal Server Errror')
        })
    }

    render() {
        if(this.state.pageRedirect===true){
            return <Redirect to='/loging'/>
        }
        return (
            <Fragment>
                <Container fluid={true} className='contactBg mt-5'>
                    <Row>
                        <Col lg={6} xl={6} md={6} sm={12} xs={12} className='contactStyle'>
                            <Form>
                                <FormControl onChange={this.onChangeUsername}  type='text' requird className='contactType' placeholder="Enter Your User Name"/>
                                <FormControl onChange={this.onChangePassword} type='password'className='contactType' placeholder="Enter Your Password"/>
                                <FormControl onChange={this.onChangePhone} type='phone'className='contactType' placeholder="Enter Your Phone Number"/>
                                <FormControl onChange={this.onChangeEmail} type='email'className='contactType' placeholder="Enter Your Email Address"/>
                                <button onClick={this.AddSignup}  className='btn btn-success btn-block contactType'> Sign Up</button>
                            </Form>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </Fragment>
        );
    }
}

export default Signup;