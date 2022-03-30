import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import axios from "axios";
import AppURL from "../api/appURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

class Orderhistory extends Component {
    constructor() {
        super();
        this.state={
            orderhistoryData:[],
            pageRefreshStatus:false,

        }
    }
    componentDidMount() {
        axios.get(AppURL.orderhistory).then(response=>{
            this.setState({orderhistoryData:response.data})
        }).catch(error=>{
            toast.error('500 internal server  Errror');
        })
    }

    deleteOrder=()=>{
        axios.post(AppURL.RemoveOrderhistory).then(response=>{
            if(response.data===1){
                this.setState({pageRefreshStatus:true})
            }else {
                toast.error('Remove Not success');
            }
        }).catch(error=>{
            toast.error('500Internal server error');
        })
    }
    pageRefresh=()=>{
        if(this.state.pageRefreshStatus===true){
            let url= window.location.reload();
            return <Redirect to={url}/>;
        }
    }

    render() {

        let orderhistoryData=this.state.orderhistoryData;
        let historyView=orderhistoryData.map((historyData,i)=>{
            return  <tr key={toString()}>
                <td>{historyData.id}</td>
                <td>{historyData.productname}</td>
                <td>{historyData.productcode}</td>
                <td>{historyData.totalprice}</td>
                <td>{historyData.mobile}</td>
                <td>{historyData.name}</td>
                <td>{historyData.productinfo}</td>
                <td>{historyData.orderstatus}</td>
                <td><Link onClick={this.deleteOrder} className='btn btn-sm btn-danger' >Delete</Link></td>
            </tr>
        })


        return (
            <Fragment>
               <Container >
                   <Row className='mt-5'>
                       <Col md={12} xl={12} lg={12} sm={12}>
                           <Table responsive striped bordered hover>
                               <thead>
                               <tr>
                                   <th>Serial No</th>
                                   <th>image</th>
                                   <th>Buyer Name</th>
                                   <th>Product Name</th>
                                   <th>Phone No</th>
                                   <th>product Price</th>
                                   <th>Product info</th>
                                   <th>Order Status</th>
                                   <th>Order Cencel</th>
                               </tr>
                               </thead>
                               <tbody>

                                   {historyView}

                               </tbody>
                           </Table>
                       </Col>
                   </Row>
                   <ToastContainer/>
               </Container>
                {this.pageRefresh()}
            </Fragment>
        );
    }
}

export default Orderhistory;