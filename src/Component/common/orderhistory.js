import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import axios from "axios";
import AppURL from "../api/appURL";
import ProductItem2 from '../../asset/images/portfolio-08.jpg';

class Orderhistory extends Component {
    constructor() {
        super();
        this.state={
            orderhistoryData:[]
        }
    }
    componentDidMount() {
        axios.get(AppURL.orderhistory).then(response=>{
            this.setState({orderhistoryData:response.data})
        }).catch(error=>{

        })
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
            </tr>
        })


        return (
            <Fragment>
               <Container >
                   <Row className='mt-5'>
                       <Col md={12} xl={12} lg={12} sm={12}>
                           <Table striped bordered hover>
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
                               </tr>
                               </thead>
                               <tbody>

                                   {historyView}


                               </tbody>
                           </Table>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default Orderhistory;