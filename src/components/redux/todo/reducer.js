import { ADDED } from "./actionTypes";
import { initialValue } from "./initialState";

const todoReducer = (state = initialValue, action) => {
    switch(action.type){
        case ADDED:
            return{

            }

            default: return state;
    }
};

export default todoReducer;
