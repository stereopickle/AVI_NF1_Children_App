import {NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE} from './type.js';


function newImageToStore(e) {
    return {
        type: NEW_IMAGE_TO_STORE,
        payload: e.target.files
    }
}

function clearImageStore() {
    return {
        type: CLEAR_IMAGE_STORE
    }
}

function postImagesToDB(e, id, photo) {
    // can we do multiple formdata?
    return (dispatch) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('wedding_id', id)
        formData.append('caption', e.target.caption.value)
        formData.append('image', photo)
        console.log(e.target.image.value)
        console.log(formData.image)
        
        fetch(`http://localhost:3000/api/v1/photos`, {
            method: 'POST',
            headers: {
                // "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(d => {
            dispatch(clearImageStore())
        })

    }
}


export {newImageToStore, clearImageStore, postImagesToDB}