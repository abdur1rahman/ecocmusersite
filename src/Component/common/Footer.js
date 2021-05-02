import React, {Component, Fragment} from 'react';
import {Container, Row, Col}from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import apple  from '../../asset/images/Apple_logo_black.svg';
import widows from '../../asset/images/windows-logo-social.png';
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";
import parse from 'html-react-parser';

class Footer extends Component {

    constructor() {
        super();
        this.state={
            address:'',
            phone:'',
            email:'',
            facebook:'',
            twiter:'',
            linkdin:''

        }
    }
    componentDidMount() {
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status==200){
                let jsondata=(response.data)[0]['address'];
                 jsondata=(response.data)[0]['phone'];
                 jsondata=(response.data)[0]['email'];
                jsondata=(response.data)[0]['twiterlink'];
                jsondata=(response.data)[0]['facebooklink'];
                jsondata=(response.data)[0]['linkdinlink'];


                this.setState({address:jsondata});
                this.setState({phone:jsondata});
                this.setState({email:jsondata});
                this.setState({twiter:jsondata});
                this.setState({facebook:jsondata});
                this.setState({linkdin:jsondata});

            }else {

            }


        }).catch(error=>{

        })
    }

    render() {

        return (
            <Fragment>
                <Container className="mt-5 text-center">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> SHARE LINK</p>
                            <Link to={this.state.twiter}  className=" fab h1 m-1 "><FontAwesomeIcon icon={faTwitterSquare}/></Link>
                            <Link to={this.state.facebook}  className=" fab h1 m-1 "><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                            <Link to={this.state.linkdin} className=" fab h1 m-1 "><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> OFFICE ADDRES </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faSearchLocation}/></sapn> Dyara, Sharat Nagar, Adarsha Sadar,{this.state.address}   </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faPhone}/></sapn> 01861413646(Help Line) {this.state.phone} </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faEnvelope}/></sapn> adur1rahman46@gmail.Com {this.state.email}</p>
                       
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">MOR INFO</p>
                           <p><Link to="/about" className="topFooter morinfoFooter"> About </Link></p>
                            <p><Link to="/contact" className="topFooter morinfoFooter">Countact Au</Link></p>
                            <p><Link to="/refanpolicy" className="topFooter morinfoFooter">Refun policy</Link></p>
                            <p><Link to='/privicy' className="topFooter morinfoFooter">Privacy policy</Link></p>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle">DOWNLOAD APP</p>
                            <img className='w-50' src={widows} alt='images'/>
                            <img className='w-25' src={apple} alt='images'/>
                        </Col>
                    </Row>
                </Container>
                <div id="google_translate_element"></div>
                <Container fluid={true} className="sectionFooter text-center">
                    <Row>
                    <Col xl={12} lg={12} md={12} sm={12}xs={12}>
                            <p className="sectionFooterFont">Copy Right By Abdur Rahman @ Resrved 2021</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;