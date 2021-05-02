import React, {Component} from 'react';
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import Login from "../Component/common/login";


class LoginPage extends Component {
    render() {
        return (
            <div>
               <Nav/>
                    <Login/>
               <Footer/>
            </div>
        );
    }
}

export default LoginPage;