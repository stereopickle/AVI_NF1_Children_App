import { CLEANUP_MARKER, CHANGE_MARKER_MENU, CHANGE_MARKER_LOCATION, CHANGE_MARKER_TYPE, POST_MARKER_SUCCESS, POST_MARKER_FAILURE, GET_MARKER_SUCCESS, GET_MARKER_FAILURE  } from "./type.js";

function changeMarkerMenu(view) {
  return {
    type: CHANGE_MARKER_MENU,
    payload: view
  };
}

function changeMarkerLocation(e) {
  return {
    type: CHANGE_MARKER_LOCATION,
    payload: {[e.target.name]: e.target.value}
  };
}

function changeMarkerType(e) {
  return {
    type: CHANGE_MARKER_TYPE,
    payload: {[e.target.name]: e.target.value}
  };
}

 function postSuccess(d) {
  return {
    type: POST_MARKER_SUCCESS,
    payload: d
  }
}

function postFailure(d) {
  return {
    type: POST_MARKER_FAILURE,
    payload: d
  }
}

function submitMarker(e, data){
  e.preventDefault();
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/markers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then( r => r.json() )
    .then( d => {
      if (d.error) {
        dispatch(postSuccess(d));
      } else {
        dispatch(postFailure(d));
      }
    })
  }
}

function getSuccess(d) {
  return {
    type: GET_MARKER_SUCCESS,
    payload: d
  }
}

function getFailure(d) {
  return {
    type: GET_MARKER_FAILURE,
    payload: d
  }
}

function getMarkers(){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/events`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then( r => r.json() )
    .then( d => {
      if (d.error) {
        dispatch(getSuccess(d));
      } else {
        dispatch(getFailure(d));
      }
    })
  }
}


function cleanupMarker() {
  return {
    type: CLEANUP_MARKER,
  };
}

export { changeMarkerMenu, changeMarkerLocation, changeMarkerType, submitMarker, getMarkers, cleanupMarker };
