import { CHANGE_MARKER_DIMENSIONS, CLEANUP_MARKER_DIMENSIONS } from "./type.js";

function changeMarkerDimensions(e) {
  return {
    type: CHANGE_MARKER_DIMENSIONS,
    payload: {[e.target.name]: e.target.value}
  };
}

function cleanupMarker() {
  return {
    type: CLEANUP_MARKER_DIMENSIONS,
  };
}

export { changeMarkerDimensions, cleanupMarker };
