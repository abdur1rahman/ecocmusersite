import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Products from "../Component/home/products";
import Slider1 from "../Component/home/slider";
import Categori from "../Component/home/categori";
import Callection from "../Component/home/callection";
import NewAraibal from "../Component/home/NewAraibal";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Slider1/>
                <Products/>
                <Categori/>
                <Callection/>
                <NewAraibal/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;