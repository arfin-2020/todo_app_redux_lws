import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todoText) =>{
    return{
        type: ADDED,
        plaload: todoText,
    };
};
export const toggled = (todoId) =>{
    return{
        type: TOGGLED,
        plaload: todoId,
    };
};
export const colorSelected = (todoId,color) =>{
    return{
        type: COLORSELECTED,
        plaload: {
            todoId,
            color,
        },
    };
};
export const allCompleted = () =>{
    return{
        type: ALLCOMPLETED,
    
    };
};
export const deleted = (todoId) =>{
    return{
        type: DELETED,
        plaload: todoId,
    };
};
export const clearCompleted = () =>{
    return{
        type: CLEARCOMPLETED,
        
    };
};

