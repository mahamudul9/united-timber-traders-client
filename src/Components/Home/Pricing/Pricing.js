import React from 'react';
import './Pricing.css'
import Zoom from 'react-reveal/Zoom';
import Footer from '../Footer/Footer';

const Pricing = () => {
    return (
        <div style={{backgroundColor:'#504037'}} className='d-flex justify-content-around'>
            <div  className="row pb-5">
                <h2 style={{textAlign:'center', color:'whitesmoke', paddingTop:'50px'}}>PRICING</h2>
                <Zoom>
                <div className="col-md-4 pt-5">
                    <div className='card'>
                        <h4>BASIC</h4>
                        <p style={{paddingTop:'2em'}}>Capacity: <b>50 KB</b></p>
                        <p>Price: <b>$500</b></p>
                        <button className='btn btn-prime btn-price'>Buy Now</button>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <div className='card'>
                        <h4>PROFESSIONAL</h4>
                        <p style={{paddingTop:'2em'}}>Capacity: <b>100 KB</b></p>
                        <p>Price: <b>$950</b></p>
                        <button className='btn btn-prime btn-price'>Buy Now</button>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <div className='card'>
                        <h4>ENTERPRISE</h4>
                        <p style={{paddingTop:'2em'}}>Capacity: <b>200 KB</b></p>
                        <p>Price: <b>$1800</b></p>
                        <button className='btn btn-prime btn-price'>Buy Now</button>
                    </div>
                </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Pricing;