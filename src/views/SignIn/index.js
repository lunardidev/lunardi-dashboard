import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";

import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import validate from "validate.js";

import { Container, Button } from "./styles";

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
      minimum: 6
    }
  }
};

function SignIn(props) {
  console.log(props.theme);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleSignIn = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <header>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            className={hasError("email") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.email || ""}
            name="email"
            type="text"
            placeholder="Email Address"
            label="false"
          />
          <input
            className={hasError("password") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.password || ""}
            name="password"
            type="password"
            placeholder="Password"
            label="false"
          />
          <Button type="submit" disabled={!formState.isValid}>
            Sign In
          </Button>
        </form>
        <h3 className="nav-link">
          <NavLink key="/sign-up" to="/sign-up">
            Or sign in with
          </NavLink>
        </h3>
        <div className="alternate-links">
          <Link to="/">
            <AiFillGoogleCircle size={24} color="#cc0000" /> Google
          </Link>
          <Link to="/">
            <AiFillFacebook size={24} color="#000080" /> Facebook
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default withTheme(SignIn);
