import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import Faverite from "../Component/common/Faverite";

class FeveraiteItemPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                <Faverite/>
                <Footer/>
            </Fragment>
        );
    }
}

export default FeveraiteItemPage;