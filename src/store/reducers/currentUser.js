import {FETCH_DETAILS,
    FETCH_DETAILS_SUCCESS,
FETCH_DETAILS_FAIL} from "../actionTypes";

const DEFAULT_STATE = {
    detailsLoading: false,
    details:{},
    detailsError: false
                    }

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case FETCH_DETAILS:
            return {...state, detailsLoading:true}
        case FETCH_DETAILS_SUCCESS:
            return {...state, details:action.details,detailsLoading:false}
        case FETCH_DETAILS_FAIL:
            return {...state, details:action.detailsError,detailsLoading:false}
        default:
            return state
    }
}