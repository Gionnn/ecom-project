import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className='container'>
        <h1>Sign Up</h1>
        <div className='fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Your e-mail' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login'>
          Already have an account? <span>Login</span>
        </p>
        <div className='agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
