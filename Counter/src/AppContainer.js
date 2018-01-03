import React from 'react';
import { View,Text, Button, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import rootReducer  from './reducers';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducer);

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default AppContainer;