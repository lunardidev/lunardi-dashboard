import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { Container } from "./styles";

const Card = props => {
  const { content, title, className, backgroundCard, color } = props;
  return (
    <Container className={className} background={backgroundCard} color={color}>
      <div className="header">{title}</div>
      <div className="content">{content}</div>
    </Container>
  );
};

Card.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  backgroundCard: PropTypes.string,
  color: PropTypes.string
};

export default withTheme(Card);
