import React, {Component, Fragment} from 'react';
import Products from '../Component/home/products';
import Categori from "../Component/home/categori";
import Callection from "../Component/home/callection";
import NewAraibal from "../Component/home/NewAraibal";
import Footer from '../Component/common/Footer';
import Slider from '../Component/home/slider';
import OnBord from '../Component/common/onBord';
import Nav from "../Component/common/Nav";


class home extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                 <Slider/>
                <Products/>
                <OnBord/>
                <Callection/>
                <Categori/>
                <NewAraibal/>
                <Footer/>
            </Fragment>
        );
    }
}

export default home;