import React, {Component} from 'react';
import OnBord from "../Component/common/onBord";
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";

class OnBordPages extends Component {
    render() {
        return (
            <div>
                <Nav/>
               <OnBord/>
               <Footer/>
            </div>
        );
    }
}

export default OnBordPages;