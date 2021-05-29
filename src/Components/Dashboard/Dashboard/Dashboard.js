import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Dashboard = () => {
    const[loggedInUser, setLoggedInUser]= useContext(UserContext);

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 text-center">
                <h2 style={{color:'#634e45',paddingTop:'50px'}}>Welcome {loggedInUser.displayName} to your Dashboard</h2>
                <h4 style={{color:'#634e45'}}>Choose your options from the sidebar</h4>
            </div>
        </div>
    );
};

export default Dashboard;