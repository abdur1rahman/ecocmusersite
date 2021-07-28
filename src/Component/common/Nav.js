import React, {Component, Fragment} from 'react';
import {Col, Row, Navbar, NavDropdown, Form, FormControl, Button, Container, DropdownButton, ButtonGroup,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faIdCard} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import axios from "axios";
import AppURL from "../api/appURL";
import {Redirect} from "react-router";

class Nav extends Component {
    constructor({match}) {
        super();
        this.state={
            data:[],
            SearchKey:'',
            SearchKeyStatusValue:false
        }
        this.SearchOnchange=this.SearchOnchange.bind(this);
        this.OnClickSearch=this.OnClickSearch.bind(this);
        this.SearchRedirect=this.SearchRedirect.bind(this);
    }
    SearchOnchange(event){
        let KeyValue = event.target.value;
        this.setState({SearchKey:KeyValue});
    }
    OnClickSearch(){
       if(this.state.SearchKey.length>=2){
            this.setState({SearchKeyStatusValue:true});

       }
    }
    SearchRedirect(){
        if(this.state.SearchKeyStatusValue===true){
            return <Redirect to={"/SearchPage/"+this.state.SearchKey} />
        }
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
                        <Link to='/' className='mr-100'><Navbar.Brand className="navli">React-Bootstrap</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Col>

                                <div className="mb-0">
                                    {[ 'right'].map((direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={direction}
                                            id={`dropdown-button-drop-${direction}`}
                                            drop={direction}
                                            variant="secondary mt-0"
                                            title={` Category ${direction} `}
                                        >
                                            <NavDropdown.Item eventKey="1">Action</NavDropdown.Item>
                                            <NavDropdown.Item eventKey="2">Another action</NavDropdown.Item>
                                            {MyView}
                                        </DropdownButton>
                                    ))}
                                </div>
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
                                <Link className='navli'> <FontAwesomeIcon className='ml-2' title="Logout"  icon={faSignOutAlt}/> </Link>

                                <Link to="/loging" className='ml-2 navli'>Login</Link>
                                <Link to="/cardLIst" className='ml-2 navli'>Card Item</Link>

                            </Col>

                            <Col><div id="google_translate_element"></div></Col>
                        </Navbar.Collapse>
                    </Navbar>
                {this.SearchRedirect()}

            </Fragment>
        );
    }
}

export default Nav;