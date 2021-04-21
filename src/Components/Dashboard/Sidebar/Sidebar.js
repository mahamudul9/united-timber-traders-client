import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt, faSignOutAlt, faList, faPlus, faTools, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const[loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [admin, setAdmin]=useState([])
    useEffect(()=>{
        fetch('https://guarded-spire-38401.herokuapp.com/admins')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])
    console.log("Admin: ",admin)
    const isAdmin= admin.find(data=>data.email===loggedInUser.email)
    console.log("Got admin: ",isAdmin)

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {isAdmin && <div>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUnlockAlt} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faTools} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    </div>}
                    {!isAdmin && <div>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="text-white" >
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    </div>}
                    <li>
                    <a href="/" className="text-white" ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>    
                    </li>
            </ul>

        </div>
    );
};

export default Sidebar;