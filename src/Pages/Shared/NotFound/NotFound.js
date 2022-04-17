import React from 'react';
import error from '../../../images/error.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center m-2'>Error ! </h2>
            <img style={{width:'700px', marginLeft:"300px"}} src={error} alt="" />
        </div>
    );
};

export default NotFound;