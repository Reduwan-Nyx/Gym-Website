import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name, img, description} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2 className='name-text'>{name}</h2>
            <p className='description-text'><small>{description}</small></p>
            <button onClick={()=> navigateToServiceDetail(id)} className='btn-button bg-primary'>Checkout: {name}</button>
        </div>
    );
};

export default Service;