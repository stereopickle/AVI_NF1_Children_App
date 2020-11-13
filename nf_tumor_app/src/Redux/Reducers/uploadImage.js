import {NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE} from '../Actions/type'

const initialState = {
    images: []
}

function reducer(oldState=initialState, action) {
    switch(action.type) {
        case NEW_IMAGE_TO_STORE:
            // let newImageArr = [...oldState.images]
            
            let file = action.payload[0];

            // const localImageUrl = window.URL.createObjectURL(file)
            // console.log(localImageUrl)
            // newImageArr.push(file)
            // debugger
            return {...oldState, images: file}
        case CLEAR_IMAGE_STORE:
            return {...initialState}
        default:
            return {...oldState}
    }
}

export default reducer