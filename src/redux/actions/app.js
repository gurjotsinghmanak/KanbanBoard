import { HANDLE_DROP, HANDLE_ADD_EDIT } from "redux/constants/app";

export function handleDrop(source, destination) {
  return {
    type: HANDLE_DROP,
    source,
    destination
  };
}

export function handleAddEdit(data) {
  return {
    type: HANDLE_ADD_EDIT,
    data
  }
}
