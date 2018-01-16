import { combineReducers } from "redux";


const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
}
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_DATA': return Object.assign({}, state, {
            isFetching: true,
            data: null,
            hasError: false,
            errorMessage: null
        });
        case 'FETCHING_DATA_SUCCESS': return Object.assign({}, state,{
            isFetching: false,
            data: action.payload,
            hasError: false,
            errorMessage: null
        });
        case 'FETCHING_DATA_FAILED': return Object.assign({}, state,{
            isFetching: false,
            data: null,
            hasError: true,
            errorMessage: action.err
        });
        default: return state;
    }   
}

const rootReducer = combineReducers({
    data: dataReducer,
})

export default rootReducer;