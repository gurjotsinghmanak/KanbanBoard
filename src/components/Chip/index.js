import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Chip({ children, color, ...props }) {
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  );
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

Chip.defaultProps = {
  color: "default"
};

export default Chip;
