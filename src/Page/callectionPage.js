import React, {Component, Fragment} from 'react';
import Callection from "../Component/home/callection";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";

class CallectionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {

        return (
            <Fragment>
                <Nav/>
              <Callection/>
              <Footer/>
            </Fragment>
        );
    }
}

export default CallectionPage;