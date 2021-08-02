import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../api/appURL";

class Priviccy extends Component {
    constructor() {
        super();
        this.state={
            privic:'',
        }
    }
    componentDidMount() {
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status===200){
                let jsonData = (response.data)[0]['privicy'];
                this.setState({privic:jsonData});
            }else {
                alert('errror')
            }
        }).catch(error=>{
            alert('errror')
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col md={12} lg={12} xl={12} sm={12} xs={12}>

                            {this.state.privic}

                            <h3 className="mt-5">PRIVICY </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>

                            <h3>ABOUT ME </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>
                            <h3>ABOUT ME </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>


                        </Col>
                    </Row>
                </Container>
            </Fragment>


        );
    }
}

export default Priviccy;