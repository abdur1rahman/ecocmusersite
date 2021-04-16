import React, {Component, Fragment} from 'react';
import Categori from "../Component/home/categori";
import Footer from "../Component/common/Footer";

class CategorisPage extends Component {
    render() {
        return (
            <Fragment>
                <Categori/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CategorisPage;