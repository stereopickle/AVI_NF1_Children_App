import {  CLEANUP_LOCATION, CHANGE_BODY_LOCATION, ADD_BODY_LOCATION } from "./type.js";

function changeBodyLocation(e) {
  return {
    type: CHANGE_BODY_LOCATION,
    payload: {[e.target.name]: e.target.value}
  };
}

function addBodyLocation(coord){
  return {
    type: ADD_BODY_LOCATION,
    payload: coord
  }
}

function cleanupLocation() {
  return {
    type: CLEANUP_LOCATION,
  };
}

export { changeBodyLocation, cleanupLocation, addBodyLocation };
