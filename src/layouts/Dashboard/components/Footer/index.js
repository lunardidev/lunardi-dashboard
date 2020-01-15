import React from "react";
import { withTheme } from "styled-components";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <Container>
      <div>
        <p>
          ©{" "}
          <Link target="_blank" href="https://github.com/lunardidev">
            lunardi.dev
          </Link>{" "}
          .2020
        </p>
        <p>Created with React (under construct)</p>
      </div>
    </Container>
  );
};

export default withTheme(Footer);
