import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import ProductDetails from "../Component/common/productDetails";
import NavMObile from "../Component/common/NavMObile";

class ProductPage extends Component {
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
                <ProductDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProductPage;