import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate = useNavigate()

    const navigateLogin = event =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault()
    }

    return (
        <div className='register-form'>
            <h2 className='text-center m-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' required/>
                <br />
                <input type="email" name='email' id='' placeholder='Email Address' required/>
                <br />
                <input type="password" name='password' id='' placeholder='Password' required/>
                <input className='bg-primary text-white border-0 rounded-3' type="submit" value="Register" />
            </form>
       <p>Already have a Account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link> </p>
            
        </div>
    );
};

export default Register;