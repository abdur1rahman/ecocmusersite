import React, {Component, Fragment} from 'react';
import Callection from "../Component/home/callection";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import NavMObile from "../Component/common/NavMObile";

class CallectionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {

        return (
            <Fragment>
                <div className="desktop" >
                    <Nav/>
                </div>
                <div className="mobile" >
                    <NavMObile/>
                </div>
              <Callection/>
              <Footer/>
            </Fragment>
        );
    }
}

export default CallectionPage;