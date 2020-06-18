import 'react-native-gesture-handler';


/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/index.js';

function Base() {
    return(
        <Provider store={store}>
            <App></App>
        </Provider>
    );
}
AppRegistry.registerComponent(appName, () => Base);
