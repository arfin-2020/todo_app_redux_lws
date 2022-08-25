import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {double} from '../../images/double-tick.png'
import double from '../images/double-tick.png';
import notes from '../images/notes.png';
import plus from '../images/plus.png';
import { added, allCompleted, clearCompleted } from "./redux/todo/actionCreators";
const Header = () => {
  const [inputData, setInputData] = useState('');
  
  const dispatch = useDispatch();
  
  const inputHandler = (e)=>{
    e.preventDefault();
    dispatch(added(inputData)) 
  }

  const allCompletedHandler = () =>{
    dispatch(allCompleted())
  }
  const clearHandler = () =>{
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        value={inputData}
          onChange={(e)=>setInputData(e.target.value)}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
          onClick={(e)=>{inputHandler(e);setInputData('')}}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src={double}
            alt="Complete"
          />
          <span onClick={allCompletedHandler}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
