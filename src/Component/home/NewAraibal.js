import React, {Component} from 'react';
import { Container,Card,Button} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

import ProductItem from "../../asset/images/portfolio-01.jpg";
import ProductItem1 from "../../asset/images/portfolio-05.jpg";
import ProductItem2 from "../../asset/images/portfolio-08.jpg";
import ProductItem3 from "../../asset/images/portfolio-09.jpg";

class NewAraibal extends Component {
  constructor(props){
    super(props)
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }

  next(){
    this.slider.slickNext();
  }
  previous(){
    this.slider.slickPrev();
  }

    render() {

        const settings = {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 500,
          slidesToShow: 3,
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
                    <div className='text-center'>
                          <Button variant="success btn-sm ml-2" onClick={this.previous}>Prev</Button>
                          <Button variant="success btn-sm ml-2" onClick={this.next}>Next</Button>
                    </div>
               
          <Slider ref={c=>(this.slider=c)}  {...settings}>
            <div>
              <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
              <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem1}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem2}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem3}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
           
            
           
            <div>
            <Card className="imageBox card1 p-3 m-0">
                  <img src={ProductItem3}/>
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