import React from 'react';
import { createStore } from 'redux';
import rootReducer  from './reducers';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducer);

class AppRoot extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

export default AppRoot;