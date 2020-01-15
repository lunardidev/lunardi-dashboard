import React, { useEffect } from "react";

import { Container, header } from "./styles";

import { NavLink } from "react-router-dom";

function NotFound(props) {
  useEffect(() => {
    document.title = props.title;
  });
  return (
    <Container>
      <header>
        <h2>404 - NOT FOUND!</h2>
        <NavLink key="/" to="/">
          Go to Login...
        </NavLink>
      </header>
    </Container>
  );
}

export default NotFound;
