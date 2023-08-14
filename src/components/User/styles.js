import styled from "styled-components";
import Box from "components/Box";
import colors from "utils/colors";

export const Container = styled(Box)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.gray1};
  color: ${colors.gray3};
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
`;
