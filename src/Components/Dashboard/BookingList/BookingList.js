import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
    const[loggeInUser,setLoggedInUser]=useContext(UserContext);
    const [booking,setBooking]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data=>setBooking(data))
    })

    const newBooking=booking.filter(book=>book.userEmail===loggeInUser.email);
    return (
        <div className='row'>
            <div className="col-md-2 mt-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className='row d-flex justify-content-around'>
            {newBooking.map(book =>
                    <div className='col-md-5 pt-5'>
                        <div className='bookings'>
                            <div className='d-flex justify-content-between status'>
                            <img src={`data:image/jpeg;base64,${book.order.image.img}`} />
                            <p >{book.status}</p>
                            </div>
                            <h4 style={{ paddingTop: '10px', color: '#b18857' }}>{book.order.title}</h4>
                            <p style={{ color: '#b18857' }}>{book.order.description}</p>
                        </div>
                    </div>
                    
                )}
                </div>
            </div>
        </div>
    );
};

export default BookingList;