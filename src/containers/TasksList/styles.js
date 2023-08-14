import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "utils/constants";
import Flex from "components/Flex";
import Box from "components/Box";
import colors from "utils/colors";

export const Container = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 16px;
  background-color: ${colors.white};
`;

export const Heading = styled("h2")`
  padding: 4px;
  color: ${colors.gray3};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const DroppableDraggingStyles = ({ $isDragging }) =>
  $isDragging &&
  css`
    background-color: ${colors.secondary};
  `;

const DraggableDraggingProps = ({ $isDragging }) =>
  $isDragging &&
  css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `;

export const DragDropContainer = styled(Box)`
  margin: 0 2px;
`;

export const DroppableContainer = styled(Box)`
  width: 280px;
  min-height: 400px;
  height: 100%;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${colors.gray1};
  background-color: ${colors.gray1};
  ${DroppableDraggingStyles};
`;

export const DraggableContainer = styled(Box)`
  min-height: 40px;
  margin-bottom: 4px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${colors.white};
  user-select: none;
  ${DraggableDraggingProps};
`;

export const TaskName = styled("h3")`
  margin-bottom: 4px;
  font-weight: 600;
  line-height: 20px;
`;

export const Info = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

export const Priority = styled(Box)`
  justify-content: space-between;
`;
