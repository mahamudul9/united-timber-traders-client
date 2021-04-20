import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    })

    // const handleStatus=(e)=>{
    //     console.log(e.target.value)
    // }
    const handleUpdate=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <div className='text-center manage-table'>
                <table>
                    <tr style={{ backgroundColor: '#634e45' }}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                    {booking.map(service =>
                        <tr key={service._id}>
                            <td>{service.billing_details.name}</td>
                            <td>{service.billing_details.email}</td>
                            <td>{service.order.title}</td>
                            <td>{service.card.brand + ' ' + service.type}</td>
                            <td><select  onClick={handleUpdate} id="status">
                                <option style={{color:'red'}} value="Pending">Pending</option>
                                <option style={{color:'yellow'}}  value="On going">On going</option>
                                <option style={{color:'green'}}  value="Done">Done</option>
                            </select></td>
                        </tr>)}
                </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;