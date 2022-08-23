import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialValue } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reducer((maxId, todo) => Math.max(todo.id, maxId), -1);
  console.log("maxID----------", maxId + 1);
  return maxId + 1;
};
const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.todoText,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.todoId) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      const { colorId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== colorId) {
          return todo;
        }
        return  {
            ...todo,
            color: color,
          };
      });
      case DELETED:
        return state.filter((todo)=>{
            if(todo.id !== action.todoId){
                return todo;
            };
        });

        case ALLCOMPLETED:
         return state.map((todo)=>{
            return{
                ...todo,
                completed:true,
            };
         })

         case CLEARCOMPLETED:
            return state.filter((todo)=>{
                if(todo.completed !== true){
                  return todo
                }
            })   

    default:
      return state;
  }
};

export default todoReducer;
