import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";

import { Container, Button } from "./styles";

import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";

import validate from "validate.js";

const schema = {
  fullName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
      minimum: 4
    },
    format: {
      pattern:
        "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-]+([ A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-]+)*",
      flags: "i",
      message: "can only contain A-z"
    }
  },
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
  },
  repeat_password: {
    presence: { allowEmpty: false, message: "is required" },
    equality: {
      attribute: "password",
      message: "is not complex enough",
      comparator: function(v1, v2) {
        return JSON.stringify(v1) === JSON.stringify(v2);
      }
    }
  }
};

function SignUp(props) {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    console.log(errors);

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
        <h2>Sign Up</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter a name"
            label="false"
            className={hasError("fullName") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.fullName || ""}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email Address"
            label="false"
            className={hasError("email") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.email || ""}
          />
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
            label="false"
            className={hasError("password") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.password || ""}
          />
          <input
            type="repeat_password"
            name="repeat_password"
            placeholder="Repeat the Password"
            label="false"
            className={hasError("repeat_password") ? "field-error" : ""}
            onChange={handleChange}
            value={formState.values.repeat_password || ""}
          />
          <Button type="button" disabled={!formState.isValid}>
            Sign Up
          </Button>
        </form>
        <h3 className="nav-link">
          <NavLink key="/" to="/">
            Or sign up with
          </NavLink>
        </h3>
        <div className="alternate-links">
          <Link to="/sign-up">
            <AiFillGoogleCircle size={24} color="#cc0000" /> Google
          </Link>
          <Link to="/sign-up">
            <AiFillFacebook size={24} color="#000080" /> Facebook
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default withTheme(SignUp);
