import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    const location= useLocation()

    let from = location.state?.from?.pathname || "/";

    let errorElement

    const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);


  if(user){
    navigate(from, { replace: true });
  }

  if (error) {

    errorElement = <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    
  }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
       
    }

    const navigateRegister = event =>{
        navigate('/register')
    }


    const resetPassword = async() =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('sent email')
    }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="mt-4 text-center">Please Log in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
       
        <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
       <p>New to Fitness Gym? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
        <p>Forgot password? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password</Link> </p>
       <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
