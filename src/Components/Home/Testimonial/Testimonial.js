import React from 'react';
import { useEffect, useState } from 'react';
import './Testimonial.css'

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
                    {reviews.map(review =>
                            <div className="col-md-4 test center">
                                <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={`data:image/jpeg;base64,${review.image.img}`} alt="" />
                                <h4>{review.name}</h4>
                                <h6>{review.designation}</h6>
                                <p>{review.description}</p>
                            </div>
                    )}
            </div>
        </div>
    );
};

export default Testimonial;