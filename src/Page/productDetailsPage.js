import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import ProductDetails from "../Component/common/productDetails";
import axios from "axios";
import AppURL from "../Component/api/appURL";
import NavMObile from "../Component/common/NavMObile";

class ProductDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            code:match.params.code,
            ProductData:[],
            loaderDiv:"true",
            mainDiv:"d-none"
        }
    }
    componentDidMount() {

        window.scroll(0,0)
        axios.get(AppURL.Productcode(this.state.code)).then(response=> {
           this.setState({ProductData:response.data,loaderDiv:"d-none",mainDiv:""})

        }).catch(error=> {

        });
    }

    render() {
            if(this.state.mainDiv==="d-none"){
                return (
                <Fragment>
                    <Nav/>
                        <h3 className={this.state.loaderDiv}>Loading...........</h3>
                    <Footer/>
                </Fragment>
                );
            }else {
                return (
                    <Fragment>
                        <div className="desktop" >
                            <Nav/>
                        </div>
                        <div className="mobile" >
                            <NavMObile/>
                        </div>
                        <ProductDetails  ProductData={this.state.ProductData} />
                        <Footer/>
                    </Fragment>
                );
            }


    }
}

export default ProductDetailsPage;