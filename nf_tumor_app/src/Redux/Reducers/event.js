import { CLEANUP_EVENT, CHANGE_INTENSITY, CHANGE_EVENT_TYPE, CHANGE_DURATION_TYPE} from "../Actions/type.js";

const initialState = {
    eventType: "None",
    eventTypeList: ["Numbness", "New Mark", "Pain", "Change in Mobility", "None"],
    durationType: "Constant",
    durationTypeList: ["Constant", "10+ Minutes", "1 - 10 Minutes", "Less than 1 Minute", "10-30 Seconds", "0 - 10 Seconds"],
    eventIntensity: 1,
    eventDescription: ""
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_INTENSITY:
            return {...oldState, eventIntensity: action.payload}
        case CHANGE_EVENT_TYPE:
            return {...oldState, eventType: action.payload}
        case CHANGE_DURATION_TYPE:
            return {...oldState, durationType: action.payload}
        case CLEANUP_EVENT:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;