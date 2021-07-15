import React, {Component} from 'react';
import { Container,Card,Button} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductItem from "../../asset/images/portfolio-01.jpg";
import ProductItem1 from "../../asset/images/portfolio-05.jpg";
import ProductItem2 from "../../asset/images/portfolio-08.jpg";
import ProductItem3 from "../../asset/images/portfolio-09.jpg";
import axios from "axios";
import AppURL from "../api/appURL";
import {Link} from "react-router-dom";

class NewAraibal extends Component {
  constructor(props){
    super(props)
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
    this.state={
        NewAraibalData:[]
    }
  }

  next(){
    this.slider.slickNext();
  }
  previous(){
    this.slider.slickPrev();
  }
  componentDidMount() {
      axios.get(AppURL.productListByRemark("new")).then(response=>{
          this.setState({NewAraibalData:response.data})

      }).catch(error=>{

      })
  }

    render() {
        let NewArrivalList=this.state.NewAraibalData;
       let newAraibalView= NewArrivalList.map((NewArrivalList,i)=>{
            return   <div key={i.toString()}>
                <Card className="imageBox card1 p-3 m-0">
                    <Link to={"/productdetails/"+NewArrivalList.produtcode}><img src={NewArrivalList.image} alt="image"/></Link>
                    <Card.Body>
                        <h1 className="productName">{NewArrivalList.title}</h1>
                        <p className="productPrice">{NewArrivalList.price}TK </p>
                    </Card.Body>
                </Card>
            </div>
        })

        const settings = {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
        return (
            <Container fluid={true} className="m-0 p-0">
                    <p className="sectionTitle">NEW ARRIVAL</p>

                    <p className="sectionSubtitle">Some Of Our Exclusive Callecction, You My Like</p>
                    <div className='text-center mb-3'>
                          <Button variant="success btn-sm ml-2" onClick={this.previous}>Prev</Button>
                          <Button variant="success btn-sm ml-2" onClick={this.next}>Next</Button>
                    </div>
               
          <Slider ref={c=>(this.slider=c)}  {...settings}>
              {newAraibalView}
            <div>
              <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem} alt="image"/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
              <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem1}alt="image" />
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem2} alt="image"/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem3} alt="image"/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
           
            
           
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem3} alt="image"/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
          </Slider>
        </Container>
            
        );
    }
}

export default NewAraibal;