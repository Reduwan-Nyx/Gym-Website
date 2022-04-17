import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>Welcome to Detail: {serviceId}</h1>
            <div className='mx-auto text-center'>
                <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;