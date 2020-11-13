import { CLEANUP_EVENT, CHANGE_INTENSITY, CHANGE_EVENT_TYPE, CHANGE_DURATION_TYPE, POST_EVENT_SUCCESS, POST_EVENT_FAILURE, GET_EVENT_SUCCESS, GET_EVENT_FAILURE } from "./type.js";

function changeEventInfo(intensityValue){
  
  return {
    type: CHANGE_INTENSITY,
    payload: intensityValue
  }
}

function changeEventType(type){
  return {
    type: CHANGE_EVENT_TYPE,
    payload: type
  }
}

function changeDurationType(type){
  return {
    type: CHANGE_DURATION_TYPE,
    payload: type
  }
}

function postSuccess(d) {
  return {
    type: POST_EVENT_SUCCESS,
    payload: d
  }
}

function postFailure(d) {
  return {
    type: POST_EVENT_FAILURE,
    payload: d
  }
}

function submitEvent(e, data){
  e.preventDefault();
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/events`, {
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
    type: GET_EVENT_SUCCESS,
    payload: d
  }
}

function getFailure(d) {
  return {
    type: GET_EVENT_FAILURE,
    payload: d
  }
}

function getEvents(){
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

function cleanupEvent() {
  return {
    type: CLEANUP_EVENT,
  };
}

export { changeEventInfo, changeEventType, changeDurationType, submitEvent, getEvents, cleanupEvent };
