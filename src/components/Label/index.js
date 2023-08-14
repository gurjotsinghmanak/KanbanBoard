import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Label({ children, color, ...props }) {
  console.log(color)
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

Label.defaultProps = {
  color: "default"
};

export default Label;
