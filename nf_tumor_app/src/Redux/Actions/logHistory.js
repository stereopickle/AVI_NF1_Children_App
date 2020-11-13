import {CLEANUP_LOG_HISTORY} from './type'

function cleanupLogHistory(){
    return {
        type: CLEANUP_LOG_HISTORY
    }
}

export {cleanupLogHistory};