import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Products from "../Component/home/products";
import Slider1 from "../Component/home/slider";
import Categori from "../Component/home/categori";
import Callection from "../Component/home/callection";
import NewAraibal from "../Component/home/NewAraibal";
import Nav from "../Component/common/Nav";
import Axios from 'axios';
import AppURL from "../Component/api/appURL";

class Home extends Component {
    componentDidMount(){
        window.scroll(0,0);
       this.GetVisitorDetails();
    }
    GetVisitorDetails=()=>{
      Axios.get(AppURL.visitorDetails).then().catch();

    }



    render() {
        return (
            <Fragment>
                <Nav/>
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