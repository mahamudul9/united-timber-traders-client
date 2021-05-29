import React from 'react';
import { useEffect, useState } from 'react';
import './Testimonial.css'
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://guarded-spire-38401.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='d-flex justify-content-center '>
            <div className="row pb-5">
                <h2 style={{ textAlign: 'center', color: '#b18857', paddingTop: '50px' }}>TESTIMONIAL</h2>

                <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    {reviews.map(review =>
                        <SwiperSlide className='testonomial' style={{ padding: '50px' }}>
                            <div className="col-md-4 test">
                                <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={`data:image/jpeg;base64,${review.image.img}`} alt="" />
                                <h4>{review.name}</h4>
                                <h6>{review.designation}</h6>
                                <p>{review.description}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Testimonial;