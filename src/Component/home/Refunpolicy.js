import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AppURL from "../api/appURL";
import axios from "axios";

class Refunpolicy extends Component {
    constructor() {
        super();
        this.state={
            refunpolicy:''
        }
    }
    componentDidMount() {
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status==200){
                let jsondata= (response.data)[0]['refunpolicy'];
                this.setState({refunpolicy:jsondata});
            }else {
                alert('network errror')
            }
        }).catch(error=>{
            alert('network errror')
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col md={12} lg={12} xl={12} sm={12} xs={12}>
                            <h3 className="mt-5">ABOUT ME </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>

                            <h3>ABOUT ME </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>
                            <h3>ABOUT ME </h3>

                            <p>    I am Abdur Rahman. i was born on 13 Augest 1995. i live at dyara,Sharat Nagar,
                                Adarsha Sadar, District Cumilla, Bangladesh.ou</p>
                            {this.state.refunpolicy}

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Refunpolicy;