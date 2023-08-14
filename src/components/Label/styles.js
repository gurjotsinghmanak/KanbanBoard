import styled, { css } from "styled-components";
import Box from "components/Box";
import colors from "utils/colors";

const colorStyles = ({ color }) =>
  (color === "red" &&
    css`
      color: ${colors.red1};
    `) ||
  (color === "blue" &&
    css`
      color: ${colors.blue1};
    `);

export const Container = styled(Box)`
  display: inline-block;
  border-radius: 4px;
  color: ${colors.yellow1};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${colorStyles}
`;
