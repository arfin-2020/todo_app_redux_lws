import React from "react";
import { useSelector } from "react-redux";
import Todos from "./Todos";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);


  const filtersByTodo = (todo) => {
      const { status } = filters;
      switch (status) {
        case 'Completed':
          return todo.completed;
        case 'Incompleted':
          return !todo.completed;
        default: return true; 
      };

    }
  
  const filtersByColors = (todo) => {
      const { colors } = filters;
      if (colors.length > 0) {
        return colors.includes(todo?.color);
      }
      return true;
    }
  
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">

      {todos
        .filter(filtersByTodo).filter(filtersByColors)
        .map((todo) => (
          <Todos todo={todo} key={todo.id} />
        ))}

    </div>
  );
};

export default Todo;
