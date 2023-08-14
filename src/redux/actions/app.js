import { HANDLE_DROP } from "redux/constants/app";

export function handleDrop(source, destination) {
  return {
    type: HANDLE_DROP,
    source,
    destination
  };
}
