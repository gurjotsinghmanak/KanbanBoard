import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

import { handleDrop } from "redux/actions/app";
import { tasksDataSelector } from "redux/selectors/app";

import Chip from "components/Chip";
import Label from "components/Label";
import User from "components/User";

import { PLATFORM_COLOR_CONFIG, PRIORITY_COLOR_CONFIG } from "utils/constants";
import {
  Container,
  Heading,
  DragDropContainer,
  DroppableContainer,
  DraggableContainer,
  TaskName,
  Info
} from "./styles";

function TasksList() {
  const data = useSelector(tasksDataSelector);
  const dispatch = useDispatch();

  function onDragEnd(drop) {
    const { source, destination } = drop;
    if (!destination) return;
    dispatch(handleDrop(source, destination));
  }

  return (
    <Container>
      <DragDropContext onDragEnd={(drop) => onDragEnd(drop)}>
        {Object.entries(data).map(([columnId, column]) => (
          <DragDropContainer key={columnId}>
            <Heading>{column.name}</Heading>
            <Droppable droppableId={columnId}>
              {({ droppableProps, innerRef: dropInnerRef, placeholder }, { isDraggingOver }) => (
                <DroppableContainer {...droppableProps} ref={dropInnerRef} $isDragging={isDraggingOver}>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {({ innerRef: dragInnerRef, draggableProps, dragHandleProps }, { isDragging }) => (
                        <DraggableContainer
                          ref={dragInnerRef}
                          {...draggableProps}
                          {...dragHandleProps}
                          $isDragging={isDragging}
                          style={{ ...draggableProps.style }}
                        >
                          <TaskName>{item.name}</TaskName>
                          <Chip color={PLATFORM_COLOR_CONFIG[item.platform.toLowerCase()]}>{item.platform}</Chip>
                          <Info>
                            <Label color={PRIORITY_COLOR_CONFIG[item.priority.toLowerCase()]}>{item.priority}</Label>
                            <User alt={item.user}>{item.user[0]}</User>
                          </Info>
                        </DraggableContainer>
                      )}
                    </Draggable>
                  ))}
                  {placeholder}
                </DroppableContainer>
              )}
            </Droppable>
          </DragDropContainer>
        ))}
      </DragDropContext>
    </Container>
  );
}

export default TasksList;
