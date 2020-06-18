import { SET_NAME, SET_TRACKING_LIST, DELETE_TRACKING_LIST, SET_TRACKING_LIST_NEW_LOGIN } from './../actionType'
import DefaultPreference from 'react-native-default-preference';
import { deleteEventTrackedUser } from '../actions/user';

const initialState = {
    name: "",
    trackingList: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.value
            };
        case SET_TRACKING_LIST:

            let data = {
                ...state,
                trackingList: [...state.trackingList, action.value]
            }
            DefaultPreference.set(state.name, JSON.stringify(data.trackingList))
            .catch(error => {
                console.log(error)
            })
            return data;

        case DELETE_TRACKING_LIST:
            deleteArrayOfObject(state.trackingList, action.value)
            var deleteTrackingList = {
                ...state,
                trackingList: state.trackingList
            }
            DefaultPreference.set(state.name, JSON.stringify(deleteTrackingList.trackingList))
            return deleteTrackingList;
        case SET_TRACKING_LIST_NEW_LOGIN:
            let value 

            if (action.value.length <= 0) {
                value = []
            } else {
                value = JSON.parse(action.value)
            }

            return {
                ...state,
                trackingList: value
            }
        default:
            return state;
    };
};

function deleteArrayOfObject (itemArray, deletedObject) {
    let tempIndex = null;

    itemArray.map((data, index) => {
        if (data.id === deletedObject.id) {
            tempIndex = index
        }
    });

    if (tempIndex != null)
        itemArray.splice(tempIndex, 1)
    else
        return
}

export default reducer;