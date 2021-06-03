import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://i.ibb.co/C1bJrTq/hanna-balan-Ye-DTjpn945g-unsplash.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
          <p><strong>KEEP CALM AND BUY</strong></p>
        <h6><strong>TIMBER!</strong></h6>
        <button class="btn btn-prime">BUY NOW</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/3sRMnTD/joel-jasmin-forestbird-xz-PMUMDDsfk-unsplash.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <p><strong>QUALITY WOOD FROM</strong></p>
        <h6><strong>GREATE TREES!</strong></h6>
        <button class="btn btn-prime">BUY NOW</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
    );
};

export default Header;