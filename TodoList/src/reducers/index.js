import { combineReducers } from 'redux';

let dataState = { data: [{data: 'testdata'}] }
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': return [
            ...state, 
            {
                data: action.payload
            }
        ]
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;