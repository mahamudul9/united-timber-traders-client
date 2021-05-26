import React from 'react';
import { useEffect, useState } from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://guarded-spire-38401.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <div className='d-flex justify-content-center'>
            <div className="row pb-5">
                <h2 style={{textAlign:'center', color:'#b18857', paddingTop:'50px'}}>TESTIMONIAL</h2>
                {reviews.map(review=>
                    <div className="col-md-4 project">
                    <SwiperSlide style={{padding:'50px'}}>
                    <img style={{height:'200px', width:'200px', borderRadius:'50%'}} src={`data:image/jpeg;base64,${review.image.img}`} alt=""/>
                    <h4>{review.name}</h4>
                    <h6>{review.designation}</h6>
                    <p>{review.description}</p>
                    </SwiperSlide>
                </div>
                )}
            </div>
        </div>
         </Swiper>
    );
};

export default Testimonial;