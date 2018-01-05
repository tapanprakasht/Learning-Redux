import { combineReducers } from 'redux';

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': return [
            ...state, 
            {
                data: action.payload
            }
        ];
        case 'REMOVE_ITEM': 
            const index = state.findIndex( x => x.id === action.id );
            return [...state.slice(0,index),...state.slice(index+1)];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items: dataReducer
});

export default rootReducer;