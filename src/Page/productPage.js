import React, {Component, Fragment} from 'react';
import Products from "../Component/home/products";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import ProductDetails from "../Component/common/productDetails";

class ProductPage extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <ProductDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProductPage;