import { CLEANUP_LOG_HISTORY } from '../Actions/type';

const initialState = {
    logList: [{name: "static"}]
};

const reducer = (oldState=initialState, action) => {
    switch(action.type) {
        case CLEANUP_LOG_HISTORY:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;