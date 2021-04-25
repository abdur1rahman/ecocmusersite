import React, {Component, Fragment} from 'react';
import {Col,Row,Container,Form, FormControl,Button} from "react-bootstrap";
import axios from "axios";
import AppURL from "../api/appURL";
import Validation from "../common/validation";


class Cocntact extends Component {
    constructor() {
        super();
        this.state={
            name:"",
            mobile:"",
            msg:"",
            contactForm:""
        }
    }
    nameOnchange=(event)=>{
     let name = event.target.value;
     this.setState({name: name});

    }

    mobileOnchange=(event)=>{
      let mobile = event.target.value;
      this.setState({mobile:mobile});

    }
    msgOnchange=(event)=>{
      let msg =  event.target.value;
      this.setState({msg:msg});

    }
    OnSubmit=(event)=>{
        let name = this.state.name;
        let mobile = this.state.mobile;
        let msg = this.state.msg;
        let MyFormData = new FormData();
        MyFormData.append("name",name)
        MyFormData.append("phone",mobile)
        MyFormData.append("messagge",msg)
        axios.post(AppURL.postcontat,MyFormData).then(function (response) {
            if(response.status==200 && response.data==1){

                alert('sucess');


            }else {
                alert('error');
            }
        }).catch(function (error) {
            alert('error');
        })

        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='contactBg mt-5'>
                    <Row>
                        <Col lg={6} xl={6} md={6} sm={12} xs={12} className='contactStyle'>
                            <Form  onSubmit={this.OnSubmit}>
                                <FormControl onChange={this.nameOnchange} typ='text' requird className='contactType' placeholder="type your name"/>
                                <FormControl onChange={this.mobileOnchange} typ='text 'className='contactType' placeholder="type your Phone"/>
                                <FormControl onChange={this.msgOnchange} typ='text 'className='contactType' placeholder="type your message"/>
                                <button type='subbmit' className='btn btn-success btn-block  contactType'>send</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Cocntact;