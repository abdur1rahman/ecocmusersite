import React, {Component, Fragment} from 'react';
import Footer from "../Component/common/Footer";
import Nav from "../Component/common/Nav";
import ListByCategori from "../Component/common/listByCategori";
import axios from "axios";
import AppURL from "../Component/api/appURL";
import NavMObile from "../Component/common/NavMObile";

class ListByCategoriPage extends Component {
    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            ProductData:[],
        }

    }
    componentDidMount() {

        window.scroll(0,0)
        axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response=> {
                this.setState({ProductData:response.data})

        }).catch(error=> {

        });
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
                <ListByCategori Category={this.state.Category}  ProductData={this.state.ProductData} />
                <Footer/>

            </Fragment>
        );
    }
}

export default ListByCategoriPage;