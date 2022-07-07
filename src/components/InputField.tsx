import React from 'react'
import "./styles.css"

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}



const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}:Props) => {
  return (
    <form className='input' onSubmit={(e)=>handleAdd(e)}>
        <input type="input" placeholder='Enter a Task' value={todo} onChange={(e)=>setTodo(e.target.value)} className='input__box'/>
        <button className='input__submit' type='submit' >Go</button>

    </form>
  )
}

export default InputField