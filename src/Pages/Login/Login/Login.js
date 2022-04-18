import React, { useRef } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import './Login.css'

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


    if(loading || sending){
      return <Loading></Loading>
    }

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
      if(email){
        await sendPasswordResetEmail(email);
        toast("sent email");
      } else{
        toast('please enter your email')
      }
    }

  return (
    <div className="login container ">
      <h2 className="mt-4 text-center">Please Log in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Fitness Gym?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forgot password?{" "}
        <button
          
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
