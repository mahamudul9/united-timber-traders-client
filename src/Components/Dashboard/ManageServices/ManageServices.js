import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import deleteIcon from '../../../images/Icon/Group 33150.png'
import editIcon from '../../../images/Icon/Group 307.png'
import './ManageService.css'

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://guarded-spire-38401.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id) => {
        fetch('https://guarded-spire-38401.herokuapp.com/delete/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log('Deleted: ', data))

        fetch('https://guarded-spire-38401.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }

    return (
        <div className='row'>
            <div className="col-md-4 col-sm-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 col-sm-12">
                <div className='text-center manage-table'>
                    <table>
                        <tr style={{ backgroundColor: '#634e45' }}>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        {services.map(service =>
                            <tr key={service._id}>
                                <td>{service.title}</td>
                                <td>{service.description}</td>
                                <td className='d-flex'><img style={{ height: '50px', padding: '5px', cursor: 'not-allowed' }} src={editIcon} /><img style={{ height: '50px', padding: '5px', cursor: 'pointer' }} src={deleteIcon} onClick={() => handleDelete(service._id)} /></td>
                            </tr>)}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;