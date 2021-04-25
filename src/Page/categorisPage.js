import React, {Component, Fragment} from 'react';
import Categori from "../Component/home/categori";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";

class CategorisPage extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <Categori/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CategorisPage;