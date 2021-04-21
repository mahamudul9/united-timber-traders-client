import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', data.name)
      formData.append('designation', data.designation)
      formData.append('description', data.description)
    
      fetch('https://guarded-spire-38401.herokuapp.com/addReview', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
      console.log(data);
      alert('Your data has saved')
    };
    return (
        <div className='row'>
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
            <form  className='add-review' onSubmit={handleSubmit(onSubmit)}>
                        <h3 style={{color: 'white'}}>Add a Review</h3><br></br>
                        <label>Name</label>
                        <input class='form-control' name="name" placeholder="Enter your name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}<br></br>
                        <label>Designation</label>
                        <input class='form-control' name="designation" placeholder="Enter company's name, designation" ref={register({ required: true })} />
                        {errors.designation && <span>This field is required</span>}<br></br>
                        <label>Description</label>
                        <input class='form-control' name="description" placeholder="Enter description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}<br></br>
                        <label>Your photo</label>
                        <input class='form-control' onChange={handleFileChange} type='file' name="image"  ref={register({ required: true })} />
                        {errors.image && <span>This field is required</span>}<br></br>
                        <input type="submit" value="Submit" class="btn btn-prime"/>
                       </form>
            </div>
        </div>
    );
};

export default Review;