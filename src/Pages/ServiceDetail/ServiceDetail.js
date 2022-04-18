import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            
            
            <div className='servicedetail mx-auto text-center'>
                <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;