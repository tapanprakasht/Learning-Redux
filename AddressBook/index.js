import { AppRegistry } from "react-native";
import App from "./src/App";
import React from "react";
import configureStore from './src/configureStore';
import { Provider } from 'react-redux';
let store = configureStore();

const AddressBook = () => {
  return (
      <Provider store={store}>
          <App/>
      </Provider>
  )
};

AppRegistry.registerComponent("AddressBook", () => AddressBook);
