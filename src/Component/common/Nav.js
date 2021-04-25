import React, {Component, Fragment} from 'react';
import {Col, Row, Container, Navbar,NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fixed={'top'} className="NavBg mb-5"  expand="lg">
                  <Link to='/'><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline className="text-center">
                                <FormControl type="text" className="searchBar" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                          <div className='NavIcon'>
                                <Link> <FontAwesomeIcon  icon={faBell}/> <sup>5</sup> </Link>
                                <Link><FontAwesomeIcon icon={faHeart}/><sup>5</sup> </Link>
                                <Link> <FontAwesomeIcon icon={faMobileAlt}/><sup>5</sup></Link>
                                <Link>Login</Link>
                          </div>
                             <div id="google_translate_element"></div>
                       </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        );
    }
}

export default Nav;