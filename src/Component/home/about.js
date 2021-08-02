import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import  axios from "axios";
import AppURL from "../api/appURL";
import ReactHtmlParser,{} from 'html-react-parser';
class About extends Component {
    constructor() {
        super();
        this.state={
            about:''
        }
    }
    componentDidMount() {
        let siteinfoAout=sessionStorage.getItem("siteInfo");
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status===200){
                let jsondata= (response.data)[0]['about'];
                this.setState({about:jsondata});
                sessionStorage.setItem("siteinfoAout",jsondata)
            }
        }).catch(error=>{

        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row >
                        <Col md={12} lg={12} xl={12} sm={12} xs={12} className="mt-2">
                            { ReactHtmlParser(this.state.about) }

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default About;