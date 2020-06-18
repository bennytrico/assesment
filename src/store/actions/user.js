import { SET_NAME, SET_TRACKING_LIST, SET_TRACKING_LIST_NEW_LOGIN, DELETE_TRACKING_LIST } from '../actionType';

export const setName = (name) => {
    return async (dispatch) => {
        dispatch({type: SET_NAME, value: name});
    };
}

export const setAddEventTrackingUser = (data) => {
    return async (dispatch) => {
        dispatch({type: SET_TRACKING_LIST, value: data})
    }
}

export const setTrackingUserNewLogin = (data) => {
    return async (dispatch) => {
        dispatch({type: SET_TRACKING_LIST_NEW_LOGIN, value: data})
    }
}

export const deleteEventTrackedUser = (data) => {
    return async (dispatch) => {
        dispatch({type: DELETE_TRACKING_LIST, value: data})
    }
}