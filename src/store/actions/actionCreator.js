import {FETCH_DETAILS,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAIL} from "../actionTypes";
import apiCall from "../../services/api";

export default function fetchCurrentUser(id){
    debugger
    return (dispatch) => {
        dispatch({  type: FETCH_DETAILS })
        return apiCall("get",`https://reqres.in/api/users/${id}`)
            .then(res => dispatch({
                type: FETCH_DETAILS_SUCCESS,
                details: res.data
            })).catch((err)=>{
                dispatch({type:FETCH_DETAILS_FAIL,detailsError:err})
            })
    } 
}