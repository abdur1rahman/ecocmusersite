import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Footer from "../Component/common/Footer";
import axios from "axios";
import AppURL from "../Component/api/appURL";
import SearchComponent from "../Component/common/SearchComponent";

class SearchPage extends Component {
    constructor({match}) {
        super();
        this.state={
            SearchKey:match.params.Key,
            ProductData:[],
        }
    }
    componentDidMount() {
        axios.get(AppURL.SearchKey(this.state.SearchKey)).then(response=>{
            this.setState({ProductData:response.data})
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Nav/>
                 <SearchComponent ProductData={this.state.ProductData} SearchKey={this.state.SearchKey}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SearchPage;