import { AppRegistry } from "react-native";
import App from "./src/App";
import configureStore from './src/configureStore';
import { Provider } from "react-redux";
import React from 'react';

let store = configureStore();

const SpaceXLaunch = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent("SpaceXLaunch", () => SpaceXLaunch);
