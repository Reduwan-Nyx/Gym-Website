import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description} = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button className='btn-button'>Checkout: {name}</button>
        </div>
    );
};

export default Service;