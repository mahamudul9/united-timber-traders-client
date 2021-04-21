import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer d-flex justify-content-around'>
            <div className='row container pt-5'>
            <div className="col-md-4">
                <h4>UNITED TIMBER TRADERS</h4>
                <p>Our commitment doesn't end with a finished package of timber. We also offer expertise, service, and distribution solutions that put the finishing touch on every deal.</p>
            </div>
            <div className="col-md-4">
                <h4>CONTACT US</h4>
                <p>Aganagar, Keraniganj, Dhaka-1310</p>
                <p style={{color:'#a57d3d'}}><strong>Email:</strong>1uttsawmill@gmail.com</p>
            </div>
            <div className="col-md-4">
                <h4>FOLLOW US</h4>
                <div >
                    <FontAwesomeIcon style={{color:'silver', fontSize:'30px', paddingRight:'10px'}} icon={faFacebook} />
                    <FontAwesomeIcon style={{color:'silver', fontSize:'30px', paddingRight:'10px'}} icon={faTwitter} />
                    <FontAwesomeIcon style={{color:'silver', fontSize:'30px', paddingRight:'10px'}} icon={faWhatsapp} />
                    <FontAwesomeIcon style={{color:'silver', fontSize:'30px', paddingRight:'10px'}} icon={faInstagram} />
                </div>   
            </div>
            </div>
        </div>
    );
};

export default Footer;