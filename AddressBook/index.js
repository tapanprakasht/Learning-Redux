import { AppRegistry } from "react-native";
import App from "./src/App";
import React from "react";
import configureStore from './src/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

let { persistor, store } = configureStore();

const AddressBook = () => {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}i >
          <App/>
        </PersistGate>
      </Provider>
  )
};

AppRegistry.registerComponent("AddressBook", () => AddressBook);
