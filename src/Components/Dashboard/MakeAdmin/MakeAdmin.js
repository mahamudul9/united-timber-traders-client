import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
          fetch('https://guarded-spire-38401.herokuapp.com/addAdmin',{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          alert('Admin has set')
    }

    
    return (
        <div className='row'>
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <form className='admin-form' onSubmit={handleSubmit(onSubmit)}>
                    <h3 style={{ color: '#634e45' }}>Make Admin</h3><br></br>
                    <input class='form-control' type='email' name="email" placeholder="Email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}<br></br>
                    <input type="submit" value="Submit" class="btn btn-prime" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;