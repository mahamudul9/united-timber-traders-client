import React from 'react';
import image1 from '../../../images/image/joel-jasmin-forestbird-xzPMUMDDsfk-unsplash.jpg'
import image2 from '../../../images/image/alexandre-jaquetoni-6yelWDI3RE8-unsplash.jpg'
import image3 from '../../../images/image/hanna-balan-YeDTjpn945g-unsplash.jpg'
import './Header.css'

const Header = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
          <p><strong>KEEP CALM AND BUY</strong></p>
        <h6><strong>TIMBER!</strong></h6>
        <button class="btn btn-prime">BUY NOW</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <p><strong>QUALITY WOOD FROM</strong></p>
        <h6><strong>GREATE TREES!</strong></h6>
        <button class="btn btn-prime">BUY NOW</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
};

export default Header;