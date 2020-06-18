import { createStore, combineReducers, applyMiddleware } from "redux";
import event from './reducers/event.js'
import user from './reducers/user.js'
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    event: event,
    user: user
});

const configureStore = createStore(rootReducers, applyMiddleware(thunk));

export default configureStore
