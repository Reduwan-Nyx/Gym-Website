import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init'
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
const [agree, setAgree] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate()

    const navigateLogin = event =>{
        navigate('/login')
    }

    

    const handleRegister = async (event) =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

       
        await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name });
          console.log("Updated profile");
           navigate("/home");
        

       
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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`}  htmlFor="terms">Accept terms and Conditions</label>
                <input
                disabled={!agree}
                className='w-50 mx-auto d-block btn btn-primary mt-3' type="submit" value="Register" />
            </form>
       <p>Already have a Account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link> 
       </p>
       <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;