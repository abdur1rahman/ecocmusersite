import React, {Component} from 'react';
import { Container,Card} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import ProductItem from "../../asset/images/portfolio-01.jpg";
import ProductItem1 from "../../asset/images/portfolio-05.jpg";
import ProductItem2 from "../../asset/images/portfolio-08.jpg";
import ProductItem3 from "../../asset/images/portfolio-09.jpg";

class NewAraibal extends Component {
    render() {
        var settings = {
      dots: false,
      infinite: true,
      autoplySpeed:3000,
      autoply:true,
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
            dots: true
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
            <Container className="mt-5">
                    <p className="sectionTitle">NEW ARRIVAL</p>
                    <i class="fas fa-angle-right"></i>
                    <i class="fas fa-angle-left"></i>
                    <p className="sectionSubtitle mb-5">Some Of Our Exclusive Callecction, You My Like </p>
                    <Slider {...settings}>
            <div>
              <Card className="imageBox card1">
                  <img src={ProductItem}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
              <Card className="imageBox card1">
                  <img src={ProductItem1}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1">
                  <img src={ProductItem2}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="imageBox card1">
                  <img src={ProductItem3}/>
                      <Card.Body>
                         <h1 className="productName">T-SHART</h1>
                          <p className="productPrice">Price- 225 </p>
                      </Card.Body>
                </Card>
            </div>
           
            
           
            <div>
            <Card className="imageBox card1">
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