import { ADD_FRECKLE_COUNT, CLEANUP_FRECKLE } from "./type.js";

function addFreckleCount(e) {
  return {
    type: ADD_FRECKLE_COUNT,
    payload: {[e.target.name]: e.target.value}
  };
}

function cleanupFreckle() {
  return {
    type: CLEANUP_FRECKLE,
  };
}

export { addFreckleCount, cleanupFreckle };
