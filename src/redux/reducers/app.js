import { v4 as uuid } from "uuid";
import { HANDLE_DROP, HANDLE_ADD_EDIT } from "redux/constants/app";

export const initialState = {
  // columnised data
  tasksData: {
    new: {
      name: "New",
      items: [
        {
          id: uuid(),
          name: "Add ability to edit phone number",
          platform: "Web",
          user: "Gurjot",
          priority: "Medium"
        },
        {
          id: uuid(),
          name: "Add new image on the existing banner on home page",
          platform: "iOS",
          user: "Adam",
          priority: "High"
        },
        {
          id: uuid(),
          name: "Add ability to update the application when user swipes down on main page",
          platform: "Android",
          user: "David",
          priority: "Low"
        }
      ]
    },
    inProgress: {
      name: "In Progress",
      items: []
    },
    qa: {
      name: "QA",
      items: []
    },
    completed: {
      name: "Completed",
      items: []
    }
  }
};

const appReducer = (state = initialState, action = {}) => {
  const { type, source, destination, data } = action;
  switch (type) {
    case HANDLE_DROP: {
      const { droppableId: sourceDroppableId, index: sourceIndex } = source;
      const { droppableId: destinationDroppableId, index: destinationIndex } = destination;
      const sourceItems = [...state.tasksData[sourceDroppableId].items];
      const destinationItems = [...state.tasksData[destinationDroppableId].items];
      const sourceItemsWithoutSource = [...sourceItems.slice(0, sourceIndex), ...sourceItems.slice(sourceIndex + 1)];

      if (sourceDroppableId !== destinationDroppableId) {
        return {
          ...state,
          tasksData: {
            ...state.tasksData,
            [sourceDroppableId]: {
              ...state.tasksData[sourceDroppableId],
              items: sourceItemsWithoutSource
            },
            [destinationDroppableId]: {
              ...state.tasksData[destinationDroppableId],
              items: [
                ...destinationItems.slice(0, destinationIndex),
                sourceItems[sourceIndex],
                ...destinationItems.slice(destinationIndex)
              ]
            }
          }
        };
      }

      return {
        ...state,
        tasksData: {
          ...state.tasksData,
          [sourceDroppableId]: {
            ...state.tasksData[sourceDroppableId],
            items: [
              ...sourceItemsWithoutSource.slice(0, destinationIndex),
              sourceItems[sourceIndex],
              ...sourceItemsWithoutSource.slice(destinationIndex)
            ]
          }
        }
      };
    }
    case HANDLE_ADD_EDIT: {
      const { items } = state.tasksData.new;
      const editIndex = items.findIndex((item) => item.id === data.id);
      return {
        ...state,
        tasksData: {
          ...state.tasksData,
          new: {
            ...state.tasksData.new,
            items:
              editIndex !== -1
                ? [...items.slice(0, editIndex), data, ...items.slice(editIndex + 1)]
                : [...items, { ...data, id: uuid() }]
          }
        }
      };
    }
    default:
      return state;
  }
};

export default appReducer;
