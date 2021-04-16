import React, {Component, Fragment} from 'react';
import Callection from "../Component/home/callection";
import Footer from "../Component/common/Footer";

class CallectionPage extends Component {
    render() {
        return (
            <Fragment>
              <Callection/>
              <Footer/>
            </Fragment>
        );
    }
}

export default CallectionPage;