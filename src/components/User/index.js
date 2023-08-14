import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function User({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

User.propTypes = {
  children: PropTypes.node.isRequired
};

export default User;
