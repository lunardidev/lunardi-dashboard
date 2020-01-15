import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Clean = props => {
  const { children, title } = props;

  useEffect(() => {
    document.title = title;
  });

  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Clean.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Clean;
