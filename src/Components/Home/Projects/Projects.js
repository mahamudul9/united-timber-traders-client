import React from 'react';
import image1 from '../../../images/image/MOTO_Exterior02_Leone-e1598637524326.jpg'
import image2 from '../../../images/image/wood-stair-treads.webp'
import image3 from '../../../images/image/bar-done-with-pallets.jpg'
import './Projects.css'
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="row pb-5">
                <h2 style={{textAlign:'center', color:'#b18857', paddingTop:'50px'}}>PROJECTS</h2>
                <Zoom>
                <div className="col-md-4 project">
                    <img src={image1} alt=""/>
                    <h4>Building</h4>
                    <p>Our woods are used for make awesome bulidings.</p>
                </div>
                </Zoom>
                <Zoom>
                <div className="col-md-4 project">
                    <img src={image2} alt=""/>
                    <h4>Stairs</h4>
                    <p>Stairs of woods are more satisfying nice looking.</p>
                </div>
                </Zoom>
                <Zoom>
                <div className="col-md-4 project">
                    <img src={image3} alt=""/>
                    <h4>Furnitures</h4>
                    <p>We supply wood for making beautiful furnitures and decoration.</p>
                </div>
            </Zoom>
            </div>        
        </div>
    );
};

export default Projects;