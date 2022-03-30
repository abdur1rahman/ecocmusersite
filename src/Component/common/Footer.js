import React, {Component, Fragment} from 'react';
import {Container, Row, Col}from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faPinterest} from "@fortawesome/free-brands-svg-icons";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import apple  from '../../asset/images/Apple_logo_black.svg';
import widows from '../../asset/images/windows-logo-social.png';
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/appURL";


class Footer extends Component {

    constructor() {
        super();
        this.state={
            address:'',
            phone:'',
            email:'',
            facebook:'',
            twiter:'',
            linkdin:'',
            printerst:'',
            instagram:'',
            widowsApp:'',
            ApploApp:''
        }
    }
    componentDidMount() {
        axios.get(AppURL.siteInfo).then(response=>{
            if(response.status===200){
                let  jsondata=(response.data)[0]['address'];
                let phone=(response.data)[0]['phone'];
                let email=(response.data)[0]['email'];
                let facebook=(response.data)[0]['facebooklink'];
                let twiter=(response.data)[0]['twiterlink'];
                let linkdin=(response.data)[0]['linkdinlink'];
                let printerst=(response.data)[0]['pinterestlink'];
                let instagram=(response.data)[0]['instagramlink'];
                let windowApp=(response.data)[0]['windowsdownloadlink'];
                let ApploApp=(response.data)[0]['appllodownloadlink'];

                this.setState({address:jsondata});
                this.setState({phone:phone});
                this.setState({email:email});
                this.setState({twiter:twiter});
                this.setState({facebook:facebook});
                this.setState({linkdin:linkdin});
                this.setState({printerst:printerst});
                this.setState({instagram:instagram});
                this.setState({widowsApp:windowApp});
                this.setState({ApploApp:ApploApp});

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
                            <Link target_blank to={this.state.twiter}  className=" fab h1 m-1 "><FontAwesomeIcon icon={faTwitterSquare}/></Link>
                            <Link to={this.state.facebook}  className=" fab h1 m-1 "><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                            <Link to={this.state.instagram} className=" fab h1 m-1 "><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                           <Link to={this.state.linkdin}  className=" fab h1 m-1 "> <FontAwesomeIcon icon={faLinkedin}/></Link>
                            <Link to={this.state.printerst}  className=" fab h1 m-1 "> <FontAwesomeIcon icon={faPinterest}/></Link>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}xs={6}>
                            <p className="sectionTitle"> OFFICE ADDRES </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faSearchLocation}/></sapn> {this.state.address}</p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faPhone}/></sapn> {this.state.phone} </p>
                            <p className="topFooter"><sapn className="addFab"><FontAwesomeIcon icon={faEnvelope}/></sapn> {this.state.email}</p>
                       
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
                            <Link target_b to={this.state.widowsApp} > <img className='w-50' src={widows} alt=''/></Link>
                            <Link to={this.state.ApploApp}> <img className='w-25' src={apple} alt=''/></Link>
                        </Col>
                    </Row>
                </Container>
                {/*<div id="google_translate_element"></div>*/}
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