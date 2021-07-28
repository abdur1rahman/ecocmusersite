import React, {Component, Fragment} from 'react';
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";

class Login extends Component {
    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            pageRedirect:false
        }
    }
    onChangeUser=(event)=>{
        let user= event.target.value;
        this.setState({username:user});
    }
    onChangePass=(event)=>{
        let pass= event.target.value;
        this.setState({password:pass});
    }
    login=(event)=>{
        event.preventDefault();
        let user= this.state.username;
        let pass= this.state.password;
        let MyFormData= new FormData();
        MyFormData.append('username',user);
        MyFormData.append('password',pass);
        axios.post(AppURL.onLogin,MyFormData).then(response=>{
            if(response.data===1){
               this.setState({pageRedirect:true})

            }else {
                alert('Wrong Username or password Pleass create your account')
            }
        }).catch(error=>{
            alert('500 Internal Server Error');
        })
    }
    render() {
        if(this.state.pageRedirect===true){
            return <Redirect to='/'/>
        }
        return (
            <Fragment>
                <Container fluid={true} className='contactBg mt-5 text-center'>
                    <Row>
                        <Col lg={6} xl={6} md={6} sm={12} xs={12} className='contactStyle'>
                            <Form>
                                <FormControl onChange={this.onChangeUser} type='text'className='contactType' placeholder="User Name"/>
                                <FormControl onChange={this.onChangePass} type='password'className='contactType' placeholder="User Password"/>
                                <button onClick={this.login} className='btn btn-success btn-block contactType'>Login</button>
                               <Link to='/Signup'><button className='btn btn-success'>Sign Up</button></Link>
                                <Link to=''> <button className='btn btn-success'>Reset Password</button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Login;