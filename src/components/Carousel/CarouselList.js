import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imag1 from '../../img/carousel-1.jpg';
import imag2 from '../../img/carousel-2.jpg';
import imag3 from '../../img/carousel-3.jpeg';

function CarouselList() {
    return (

<div>




      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imag1} style={{  maxHeight:600 }}
            alt="First slide"
          />

          <Carousel.Caption>

            <h1 class="display-2 text-primary animated slideInDown mb-4">The Best  School For Your Child</h1>

            <p class="display-2 text-primary animated slideInDown mb-4">For Your Kids</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{  maxHeight:600 }}            src={imag2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
            <h1 class="display-2 text-secondary animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>

            <h3 class="display-2 text-success animated slideInDown mb-4">Ragersville</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 " style={{  maxHeight:600 }} 
            src={imag3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h1 class="display-2 text-info animated slideInDown mb-4">Ragersville Pre School campus</h1>
            <h3>
            Bestech Park View City 1, Sohna Road, Sector 48, Gurugram, Haryana
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      </div>
    );
  }
  
  export default CarouselList;