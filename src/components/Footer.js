import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "./redux/filters/actionCreators";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filters)
  const dispatch = useDispatch();
  const todoRemaining = todos.filter((todo) => !todo.completed).length;

  const noOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
      case 0:
        return "No task";
      case 1:
        return '1 task'
      default: return `${no_of_todos} tasks`
    }
  }

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status))
    // console.log(result)
  }

  const { status, colors } = filter;

  const handleColorChange = (color) =>{
    if(colors.includes(color)){
      dispatch(colorChanged(color, 'remove'))
    }else{
      dispatch(colorChanged(color, 'added'))
    }
  }
  
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{noOfTodos(todoRemaining)} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className={`cursor-pointer ${status === 'All' && "font-bold"}`} onClick={() => handleStatusChange('All')}>All</li>
        <li>|</li>
        <li className={`cursor-pointer ${status === 'Incompleted' && "font-bold"}`} onClick={() => handleStatusChange('Incompleted')}>Incomplete</li>
        <li>|</li>
        <li className={`cursor-pointer ${status === 'Completed' && "font-bold"}`} onClick={() => handleStatusChange('Completed')}>Complete</li>
        <li></li>
        <li></li>
        <li className={`h-3 w-3 border-2 border-geen-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`} onClick={()=>handleColorChange('green')}></li>
        <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`} onClick={()=>handleColorChange('red')}></li>
        <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`} onClick={()=>handleColorChange('yellow')}></li>
      </ul>
    </div>
  );
};

export default Footer;
