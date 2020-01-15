import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { Container } from "./styles";

const ProgressBar = props => {
  const { percentage, color, background, className } = props;
  return (
    <Container
      percentage={percentage}
      className={className}
      background={background}
      color={color}
    >
      <div className="percentage" />
    </Container>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string
};

export default withTheme(ProgressBar);
