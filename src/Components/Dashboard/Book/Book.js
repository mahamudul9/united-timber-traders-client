import React, { useEffect, useState } from 'react';
import MakePayment from '../MakePayment/MakePayment';
import Sidebar from '../Sidebar/Sidebar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import './Book.css'
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51IeKBlABh6f6yGUjzUXBd64pkVZkEwmaOpUtaJwZifbWj9pEL2XGBlJliAUxKBSphC1AY0iRTDVh2Q16bvuuZMq8008f5loySk');
const Book = () => {
    let {id}=useParams();
    const [services, setServices]= useState([]);
    const newService= services.find(service =>service._id===id);
    console.log(newService);
    const newOrder={
        title: newService?.title,
        description: newService?.description,
        price: newService?.price,
        image: newService?.image
    }
    useEffect(() => {
        fetch('https://guarded-spire-38401.herokuapp.com/services')
        .then(response =>response.json())
        .then(data =>setServices(data))
    },[])

    const[shipping,setShipping]=useState(false)
    const [billing_details, setbilling_details]=useState([])
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setbilling_details(data);
        setShipping(true);    
    }
    return (
        <div className='row'>
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
               {!shipping && <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                    <h3 style={{ color: '#634e45' }}>Shipping Information</h3><br></br>
                    <input class='form-control' name="name" placeholder="Name" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}<br></br>
                    <input class='form-control' type='email' name="email" placeholder="Email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}<br></br>
                    <input class='form-control' name="phone" placeholder="Phone Number" ref={register({ required: true })} />
                    {errors.phone && <span>This field is required</span>}<br></br>
                    <input class='form-control' name="address" placeholder="Address" ref={register({ required: true })} />
                    {errors.address && <span>This field is required</span>}<br></br>
                    <input type="submit" value="Submit" class="btn btn-prime" />
                </form>}
            
               {shipping && <div className='payment-card'>
                    <h4>You Choose</h4>
                    <h6>Service: {newService.title}</h6>
                    <h6>Your bill is only ${newService.price}</h6>
                    <h4>Make payment to confirm the order</h4>
                    <div style={{border:'2px solid #634e45', width:'350px', padding:'20px'}}>
                    <Elements stripe={stripePromise}>
                        <MakePayment billing_details={billing_details} order={newOrder}></MakePayment>
                    </Elements>
                    </div> 
                </div>}
                </div>
        </div>
    );
};

export default Book;