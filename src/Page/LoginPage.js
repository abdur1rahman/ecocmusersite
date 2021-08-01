import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import Login from "../Component/common/login";
import NavMObile from "../Component/common/NavMObile";


class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
                    <Login/>
               <Footer/>
            </Fragment>
        );
    }
}

export default LoginPage;