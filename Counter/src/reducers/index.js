import { combineReducers } from "redux";



const dataReducer = (state={ count: 0 },action) => {
    switch(action.type){
        case 'INCREMENT':  return { count: state.count + 1 }; 
        case 'DECREMENT': return {count: state.count - 1}; 
        default: return state;
    }
}


const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;