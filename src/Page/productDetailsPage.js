import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import ProductDetails from "../Component/common/productDetails";

class ProductDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
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

export default ProductDetailsPage;