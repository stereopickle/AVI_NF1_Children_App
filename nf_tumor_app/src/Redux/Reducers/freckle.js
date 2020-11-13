import { ADD_FRECKLE_COUNT, CLEANUP_FRECKLE } from "../Actions/type.js";

const initialState = {
    freckleCount: 0
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case ADD_FRECKLE_COUNT:
            // validate freckle count and type cast to String > Int
            if (action.payload.freckleCount !== undefined) {
                if (parseInt(action.payload.freckleCount) < 0) {
                action.payload.freckleCount = 0;
                } else {
                    action.payload.freckleCount = parseInt(action.payload.freckleCount);
                }
            }
            return {...oldState, ...action.payload}
        case CLEANUP_FRECKLE:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;