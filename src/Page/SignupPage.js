import React, {Component, Fragment} from 'react';
import Signup from "../Component/common/signup";
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";

class SignupPage extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <Signup/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SignupPage;