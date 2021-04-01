import React, {Component, Fragment} from 'react';
import {Container, Navbar,NavDropdown,Form,Button,FormControl, NavItem} from "react-bootstrap";



class Nav extends Component {
    render() {
        return (
           
                  <Fragment>
                      <Container fluid={true} className="m-0 p-0">
                        <Navbar bg="light navBackground " expand="lg" fixed={"top"}>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                               
                                <NavItem className="navItem"><a href="#">Shope</a></NavItem>
                                <NavItem className="navItem"><a href="#">Home</a></NavItem>
                                <NavItem className="navItem"><a href="#">Home</a></NavItem>
                                <NavItem className="navItem"><a href="#">Home</a></NavItem>

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown navDropdown"className="navDropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Form inline ClassName="ml-30">
                                     <FormControl type="text" placeholder="Search" className="" />
                                     <Button variant="outline-success"ClassName="btnCoustom">Search</Button>
                                </Form>
                                <NavItem className="navItem"><a href="#">FAVERITE</a></NavItem>
                                <NavItem className="navItem"><a href="#">NOTIFICATION</a></NavItem>
                                <NavItem className="navItem"><a href="#">LOGIN</a></NavItem>
                            </Navbar.Collapse>
                        </Navbar>
                      </Container>
                  </Fragment>
           

        );
    }
}
    export default Nav;