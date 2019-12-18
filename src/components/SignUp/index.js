import React from 'react';

import { Container } from './styles';

import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

import { Link } from 'react-router-dom';

function SignUp() {
  
  return (
    <Container>
        <header>
            <h2>Sign Up</h2>
            <input type="name" placeholder="Enter a name" label="false" />
            <input type="email" placeholder="Enter your email Address" label="false" />
            <input type="password" placeholder="Create a Password" label="false" />
            <button type="button">Sign Up</button>
            <h3 className="signin-alternative">Or sign up with</h3>
            <div className="signin-buttons">
              <Link to="/"><AiFillGoogleCircle size={24} color="#cc0000" /> Google</Link>
              <Link to="/"><AiFillFacebook size={24} color="#000080" /> Facebook</Link>
            </div>
        </header>
    </Container>
  );
}

export default SignUp;
