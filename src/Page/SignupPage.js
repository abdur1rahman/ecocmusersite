import React, {Component, Fragment} from 'react';
import Signup from "../Component/common/signup";
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import NavMObile from "../Component/common/NavMObile";

class SignupPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
                <Signup/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SignupPage;