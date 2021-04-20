import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div style={{ backgroundColor: '#b18857' }} className='d-flex justify-content-around'>
            <div style={{ textAlign: 'center' }} className='row pb-2 m-5'>
                <h2 style={{ textAlign: 'center', color: 'whitesmoke', paddingTop: '10px' }}>SERVICES</h2>
                {services.map(service =>
                    <div className='col-md-4 pt-5'>
                        <div className='service'>
                            <img src={`data:image/jpeg;base64,${service.image.img}`} />
                            <h4 style={{ paddingTop: '10px', color: '#f0edde' }}>{service.title}</h4>
                            <p style={{ color: '#f0edde' }}>{service.description}</p>
                            <p style={{ color: '#f0edde' }}>Price: <b>${service.price}</b></p>
                            <Link style={{textDecoration:'none', color:'#b18857'}} to={'/book/'+service._id}><button className='btn btn-king'>Buy Now</button></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;