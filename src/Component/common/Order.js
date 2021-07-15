import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form} from "react-bootstrap";


class Order extends Component {
    constructor() {
        super();
       this.state={
           FormData:'d-none',
       }
       this.OnChangeItem=this.OnChangeItem.bind(this)
    }

    OnChangeItem(){
      this.setState({FormData:''});
    }

    render() {


        return (
            <Fragment>
                <Container>
                    <Row className='mt-5'>
                        <Col xl={6} lg={6} md={6} sm={12}>
                           <Form>
                               <h4 className='mt-2'> Delybary Status</h4>
                               <select onChange={this.OnChangeItem}>
                                    <option value="">OnCash Delybary</option>
                                    <option value="" >Bekas</option>
                                    <option value="">Nagad</option>
                                    <option value="" >Roket</option>
                               </select><br/><br/>
                               <div className={this.state.FormData}>
                                   <input type='text' name='name' placeholder='type you bikas no '/><br/><br/>
                                   <input type='text' name='name' placeholder='type you trunsition no '/><br/>
                               </div>
                           </Form>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Order;
