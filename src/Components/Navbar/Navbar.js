import React, { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../images/image/utt.png';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInuser, setLoggedInuser]= useContext(UserContext)
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand" href="/"><img style={{height:'60px'}} src={logo} alt=""/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' style={{color:'white'}} class="nav-link active" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/services' style={{color:'white'}} class="nav-link" hr>Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/projects' style={{color:'white'}} class="nav-link">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/pricing' style={{color:'white'}} class="nav-link">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/testimonial' style={{color:'white'}} class="nav-link">Testimonial</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/dashboard' style={{color:'white'}} class="nav-link">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <button  class="btn nav-link" ><Link to='/login' style={{color:'white', textDecoration:'none', backgroundColor: '#634e45', padding:'10px', borderRadius:'0.3em'}}>{loggedInuser.isSigned ? loggedInuser.displayName : 'Login'}</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;