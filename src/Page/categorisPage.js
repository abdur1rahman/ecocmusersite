import React, {Component, Fragment} from 'react';
import Categori from "../Component/home/categori";
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import NavMObile from "../Component/common/NavMObile";

class CategorisPage extends Component {
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
                <Categori/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CategorisPage;