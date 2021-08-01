import React, {Component} from 'react';
import { Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

import ProductItem from "../../asset/images/slide-03-image-01.png";
import ProductItem1 from "../../asset/images/portfolio-05.jpg";
import ProductItem2 from "../../asset/images/portfolio-08.jpg";
import ProductItem3 from "../../asset/images/portfolio-09.jpg";

class Slider1 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
            <Container fluid={true} className="mt-5 p-0  ">
            <Slider ref={c=>(this.slider=c)}  {...settings}>
            <div>              
                  <img className="slideImg" src={ProductItem} alt=""/>
            </div>
            <div>            
                  <img src={ProductItem1} className="slideImg" alt="" />
            </div>
            <div>         
                  <img src={ProductItem2} className="slideImg" alt=""/>
            </div>
            <div>     
                  <img src={ProductItem3} className="slideImg" alt="" />
            </div>                     
            <div>          
                  <img src={ProductItem2}className="slideImg" alt=""/>
            </div>
          </Slider>
            </Container>                         
        );
    }
}

export default Slider1;