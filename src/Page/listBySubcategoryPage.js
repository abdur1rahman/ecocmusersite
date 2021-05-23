import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import ListBySubCategori from "../Component/common/listBySubCategori";
import Footer from "../Component/common/Footer";
import axios from "axios";
import AppURL from "../Component/api/appURL";

class ListBySubcategoryPage extends Component {
    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            SubCategory:match.params.SubCategory,
            ProductData:[]
        }
    }
    componentDidMount() {
        window.scroll(0,0);
        axios.get(AppURL.ProdutListBySubCategory(this.state.Category, this.state.SubCategory)).then(response=>{
            this.setState({ProductData:response.data});
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Nav/>
                <ListBySubCategori SubCategory={this.state.SubCategory} ProductData={this.state.ProductData} />
                <Footer/>
            </Fragment>
        );
    }
}

export default ListBySubcategoryPage;