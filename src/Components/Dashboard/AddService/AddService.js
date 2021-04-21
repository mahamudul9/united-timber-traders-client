import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './AddServices.css'

const AddService = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      const formData = new FormData()
      formData.append('file', file)
      formData.append('title', data.title)
      formData.append('description', data.description)
    
      fetch('https://guarded-spire-38401.herokuapp.com/addServices', {
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
            <form  className='add-form' onSubmit={handleSubmit(onSubmit)}>
                        <h3 style={{color: 'white'}}>AddService</h3><br></br>
                        <input class='form-control' name="title" placeholder="Enter title" ref={register({ required: true })} />
                        {errors.title && <span>This field is required</span>}<br></br>
                        <input class='form-control' name="description" placeholder="Enter description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}<br></br>
                        <input class='form-control' type='number' name="price" placeholder="Price" ref={register({ required: true })} />
                        {errors.price && <span>This field is required</span>}<br></br>
                        <input class='form-control' onChange={handleFileChange} type='file' name="image"  ref={register({ required: true })} />
                        {errors.image && <span>This field is required</span>}<br></br>
                        <input type="submit" value="Submit" class="btn btn-prime"/>
                       </form>
            </div>
        </div>
    );
};

export default AddService;