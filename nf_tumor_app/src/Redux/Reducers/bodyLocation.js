import {  CLEANUP_LOCATION, CHANGE_BODY_LOCATION, ADD_BODY_LOCATION } from '../Actions/type'

const initialState = {
    section: 1,
    subSection: 1,
    coordinateStack: []
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case CHANGE_BODY_LOCATION:
            // validate section and type cast to String > Int
            if (action.payload.section !== undefined) {
                if (parseInt(action.payload.section) < 1) {
                action.payload.section = 1;
                } else {
                    action.payload.section = parseInt(action.payload.section);
                }
            }
            // vaidate subsection and type cast to String > Int
            if (action.payload.subSection !== undefined) {
                if ( parseInt(action.payload.subSection) < 1) {
                    action.payload.subSection = 1;
                } else {
                    action.payload.subSection = parseInt(action.payload.subSection);
                }
            }
            return {...oldState, ...action.payload}
        case ADD_BODY_LOCATION:
            return {...oldState, coordinateStack: [...oldState.coordinateStack, action.payload]}
        case CLEANUP_LOCATION:
                return initialState;
            default:
                return oldState;
    }
}

export default reducer;