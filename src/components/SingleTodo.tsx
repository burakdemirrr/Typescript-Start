import React from 'react'
import { Todo } from '../model';
import { FaEdit } from "react-icons/fa";
import { FaDeploydog } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
interface Props{
    todo:Todo;
    key:number;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo,key,todos,setTodos}) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text">
            {todo.todo}
        </span>
        <div className="">
            <span className="icon"><FaEdit/></span>
            <span><FaDeploydog/></span>
            <span><FaDotCircle/></span>
        </div>

    </form>
  )
}

export default SingleTodo