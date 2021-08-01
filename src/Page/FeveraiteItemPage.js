import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import Faverite from "../Component/common/Faverite";
import NavMObile from "../Component/common/NavMObile";

class FeveraiteItemPage extends Component {
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
                <Faverite/>
                <Footer/>
            </Fragment>
        );
    }
}

export default FeveraiteItemPage;