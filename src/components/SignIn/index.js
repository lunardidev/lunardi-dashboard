import React from 'react';

import { Container, header} from './styles';

import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

import { Redirect, Link } from 'react-router-dom';

import { isAuthenticated } from '../../auth';

function SignIn() {
  
  return isAuthenticated()===false ? (
    <Container>
        <header>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email Address" label="false" />
            <input type="password" placeholder="Password" label="false" />
            <button type="button">Sign In</button>
            <h3 className="signin-alternative">
              <Link to="sign-up">Or sign in with</Link>
            </h3>
            <div className="signin-buttons">
              <Link to="/"><AiFillGoogleCircle size={24} color="#cc0000" /> Google</Link>
              <Link to="/"><AiFillFacebook size={24} color="#000080" /> Facebook</Link>
            </div>
        </header>
    </Container>
  ) : (
    <Redirect to="/dashboard"/>
  )
}

export default SignIn;
