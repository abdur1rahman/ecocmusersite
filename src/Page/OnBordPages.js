import React, {Component, Fragment} from 'react';
import OnBord from "../Component/common/onBord";
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";

class OnBordPages extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
               <OnBord/>
               <Footer/>
            </Fragment>
        );
    }
}

export default OnBordPages;