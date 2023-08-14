import styled, { css } from "styled-components";
import Box from "components/Box";
import colors from "utils/colors";

const colorStyles = ({ color }) =>
  (color === "blue" &&
    css`
      background-color: ${colors.secondary};
      color: ${colors.white};
    `) ||
  (color === "orange" &&
    css`
      background-color: ${colors.orange1};
      color: ${colors.white};
    `);

export const Container = styled(Box)`
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  background-color: ${colors.yellow1};
  color: ${colors.black};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${colorStyles}
`;
