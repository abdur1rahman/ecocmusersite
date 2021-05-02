import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import ProductDetails from "../Component/common/productDetails";

class ProductPage extends Component {
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

export default ProductPage;