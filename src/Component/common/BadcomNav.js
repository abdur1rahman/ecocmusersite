import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormControl, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHeart, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

class BadcomNav extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fixed={'top'} className="NavBg mb-0"  expand="lg">
                    <Link to='/' className='mr-100'><Navbar.Brand className="navli">React-Bootstrap</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                        </Col>
                        <Col lg={7}>
                            <Form inline  method="" enctype="">
                                <FormControl onChange={this.SearchOnchange} type="text" className="searchBar" placeholder="Search" className="mr-sm-2"/>
                                <Button onClick={this.OnClickSearch} variant="secondary" type="button">Search</Button>

                            </Form>

                        </Col>
                        <Col lg={5}>
                            <Link to="/notifi" className='navli'> <FontAwesomeIcon className='ml-2' icon={faBell}/> <sup> 5 </sup> </Link>
                            <Link to="/feverite" className='navli'><FontAwesomeIcon className='ml-2' icon={faHeart}/> <sup> 5 </sup> </Link>
                            <Link className='navli'> <FontAwesomeIcon className='ml-2' icon={faMobileAlt}/> <sup >5 </sup> </Link>

                            <Link to="/loging" className='ml-2 navli'>LOGIN</Link>

                            <Link to="/cardLIst" className='ml-2 navli'>CARD ITEM</Link>

                        </Col>

                        <Col><div id="google_translate_element"></div></Col>
                    </Navbar.Collapse>
                </Navbar>


            </Fragment>
        );
    }
}

export default BadcomNav;