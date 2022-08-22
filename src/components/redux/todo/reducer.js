import { ADDED, TOGGLED } from "./actionTypes";
import { initialValue } from "./initialState";


const nextTodoId = (todos) =>{
    const maxId = todos.reducer((maxId, todo)=>Math.max(todo.id, maxId),-1);
    console.log("maxID----------",maxId+1);
    return maxId +1;
}
const todoReducer = (state = initialValue, action) => {
    switch(action.type){
        case ADDED:
            return[
                ...state,
                {
                    id:nextTodoId(state),
                    text: action.payload,

                }
            ]
            case TOGGLED:
                return state.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo;
                    }else{
                        return{
                            ...todo,
                            completed: !completed,
                        }
                    }
                })
            

            default: return state;
    }
};

export default todoReducer;
