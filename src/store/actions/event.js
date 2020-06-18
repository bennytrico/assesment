import { SET_EVENT_TRACKING } from "../actionType";

export const setEventTracking = (data) => {
    return async (dispatch) => {
        dispatch({type: SET_EVENT_TRACKING, data})
    };
}