import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router";
import axios from "axios";
import AppURL from "../api/appURL";
import {Button, ButtonGroup, Col, DropdownButton, Form, FormControl, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHeart, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

class NavMObile extends Component {
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
                <Navbar fixed={'top'} className="NavBg mb-0 text-center"  expand="lg">
                    <Link to='/' className='mr-100'><Navbar.Brand className="navli">React-Bootstrap</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <input type='text' className='form-control m-1'/>
                        <button className='btn btn-success btn-block m-1'>Search</button>
                    </Navbar.Collapse>
                </Navbar>
                {this.SearchRedirect()}

            </Fragment>
        );
    }
}

export default NavMObile;