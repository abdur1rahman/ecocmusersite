import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import  axios from "axios";
import AppURL from "../api/appURL";

class About extends Component {
    constructor() {
        super();
        this.state={
            about:''
        }
    }
    componentDidMount() {
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status==200){
                let jsondata= (response.data)[0]['about'];
                this.setState({about:jsondata});
            }
        }).catch(error=>{

        });
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

                            {this.state.about}
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default About;