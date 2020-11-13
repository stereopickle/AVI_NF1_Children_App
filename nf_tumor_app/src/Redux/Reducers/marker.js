import { ADD_MARKER, CLEANUP_MARKER, CHANGE_MARKER_MENU, CHANGE_MARKER_TYPE } from "../Actions/type.js";

const initialState = {
    viewState: 1,
    markerType: "Tumor",
    hasDetails: false,
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_MARKER_MENU:
            return {...oldState, viewState: action.payload}
        case CHANGE_MARKER_TYPE:
            if (action.payload.hasDetails !== undefined){
                return{...oldState, hasDetails: !oldState.hasDetails}
            }
            return {...oldState, ...action.payload}
        case ADD_MARKER:
            return {}
        case CLEANUP_MARKER:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;