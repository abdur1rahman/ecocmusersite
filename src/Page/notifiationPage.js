import React, {Component, Fragment} from 'react';
import Nav from "../Component/common/Nav";
import Notifiction from "../Component/common/notifiction";
import Footer from "../Component/common/Footer";
import axios from "axios";
import AppURL from "../Component/api/appURL";

class NotifiationPage extends Component {
    constructor(){
        super();
        this.state={
            NotificationData:[],
        }
    }
    componentDidMount() {
        window.scroll(0,0);
        axios.get(AppURL.NotificationHistory).then(response=>{
            this.setState({NotificationData:response.data});
        }).catch(error=>{

        })
    }
    render() {
        return (
            <Fragment>
                <Nav/>
                <Notifiction  NotificationData={this.state.NotificationData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default NotifiationPage;