import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todoText) =>{
    // console.log(todoText);
    return{
        type: ADDED,
        todoText,
    };
};
export const toggled = (todoId) =>{
    return{
        type: TOGGLED,
         todoId,
    };
};
export const colorSelected = (colorId,color) =>{
    return{
        type: COLORSELECTED,
        payload: {
            colorId,
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
        todoId,
    };
};
export const clearCompleted = () =>{
    return{
        type: CLEARCOMPLETED,
        
    };
};

