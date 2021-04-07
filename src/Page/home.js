import React, {Component, Fragment} from 'react';
import Products from '../Component/home/products';
import Categori from "../Component/home/categori";
import Callection from "../Component/home/callection";
import NewAraibal from "../Component/home/NewAraibal";
import Footer from '../Component/common/Footer';
import Nav from '../Component/common/Nav';
import Slider from '../Component/home/slider';
//import OnBord from '../Component/common/onBord';


class home extends Component {
    render() {
        return (
            <Fragment>              
                 <Nav/>
                 <Slider/>               
                <Products/>
                <Callection/>
                <Categori/>
                <NewAraibal/>
                <Footer/>
            </Fragment>
        );
    }
}

export default home;