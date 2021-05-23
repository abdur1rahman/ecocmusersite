import React, {Component, Fragment} from 'react';
import {Col, Row, Navbar, NavDropdown, Form, FormControl, Button, Container, DropdownButton, ButtonGroup,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faIdCard} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import axios from "axios";
import AppURL from "../api/appURL";

class Nav extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            key:[]
        }
    }
    SearchOnchange(event){
        let SearchKey = event.target.value;
        this.setState({key:SearchKey})
    }
    OnSubmit(event){
        event.PreventDefault();

    }
    componentDidMount() {
        axios.get(AppURL.categori).then(response=>{
                this.setState({data:response.data})
        }).catch(error=>{
        })
    }


    render() {
        let mylist=this.state.data;
        let MyView = mylist.map((ParentList,i)=>{
            return <div key={i.toString()}>
                <NavDropdown title={ParentList.parentcategoriNameValue} id="basic-nav-dropdown">
                       <NavDropdown.Item>
                           {
                               (ParentList.subcategorivale).map((ChildList,i)=>{
                                   return <NavDropdown.Item>
                                             <Link to={"ListBySubCategoryPage/"+ChildList.categor1_iname+"/"+ChildList.categor2_iname}>
                                                {ChildList.categor2_iname}
                                             </Link>
                                        </NavDropdown.Item>
                               })
                           }
                       </NavDropdown.Item>
                </NavDropdown>
            </div>
        })
        return (
            <Fragment>
                    <Navbar fixed={'top'} className="NavBg mb-0"  expand="lg">
                        <Link to='/' className='mr-100'><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Col>
                                <NavDropdown title="Categori" id="basic-nav-dropdown">

                                    <NavDropdown title="WoMan Fachion" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Action2</NavDropdown.Item>
                                    </NavDropdown>

                                    {MyView}

                                </NavDropdown>
                                <div className="mb-2">
                                    {[ 'right'].map((direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={direction}
                                            id={`dropdown-button-drop-${direction}`}
                                            drop={direction}
                                            variant="secondary"
                                            title={` Drop ${direction} `}
                                        >
                                            <NavDropdown.Item eventKey="1">Action</NavDropdown.Item>
                                            <NavDropdown.Item eventKey="2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item eventKey="3">Something else here</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item eventKey="4">Separated link</NavDropdown.Item>
                                        </DropdownButton>
                                    ))}
                                </div>
                            </Col>
                            <Col lg={7}>
                                <Form inline>
                                    <FormControl onChange={this.SearchOnchange} type="text" className="searchBar" placeholder="Search" className="mr-sm-2"/>
                                    <Button onClick={this.OnSubmit} type='submit'>Search</Button>
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

export default Nav;