import { combineReducers } from 'redux';

import event from './event.js';
import marker from './marker.js';
import dimensions from './dimensions.js';
import freckle from './freckle.js';
import bodyLocation from './bodyLocation.js';
import logHistory from './logHistory.js';
import uploadImage from './uploadImage.js';

export default combineReducers({
    event, marker, dimensions, freckle, bodyLocation, logHistory, uploadImage
})
