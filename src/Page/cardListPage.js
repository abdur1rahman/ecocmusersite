import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import Addcardlist from "../Component/common/addcardlist";

class CardListPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                    <Addcardlist/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CardListPage;