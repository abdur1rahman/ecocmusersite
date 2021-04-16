import React, {Component, Fragment} from 'react';
import Products from "../Component/home/products";
import Footer from "../Component/common/Footer";

class ProductPage extends Component {
    render() {
        return (
            <Fragment>
                <Products/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProductPage;