import rootReducer from "./reducer";
import { createStore } from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware } from "redux";

const middleware = applyMiddleware(thunk,promise);

export default function configureStore() {
    let store = createStore(rootReducer,middleware);
    return store;
}