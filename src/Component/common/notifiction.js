import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {Container,Row,Col} from "react-bootstrap";

class Notifiction extends Component {
    render() {
       let NotifictionList=this.props.NotificationData;

       let NotificationView=NotifictionList.map((myview,i)=>{

           return <Col key={i.toString()} lg={6} xl={6} sm={12} md={6} xs={12}>
               <h5 className="mt-5 pt-5">{myview.title}</h5>
               <FontAwesomeIcon icon={faBell}/> <span className="LinkFont"><a  href="#">{myview.date} | status: unred </a></span>
           </Col>
        })
        return (
            <Fragment>
                <Container ClassName="mt-5" >
                    <Row>
                        {NotificationView}



                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Notifiction;