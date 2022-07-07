import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

let name: string = "burak";

let surname: any;


let age: number | string = 5;

age = "burka"
age = 5;

let printName: (name: string) => void;

let personName: unknown;

//void returns undefined never returns nothing

let isStudent: boolean = false;

let hobbies: string[] = ["sport", "reading"];

let role: [number, string] = [2, "author"];

type Person = {
  name: string;
  //if ? is used,then it is optional
  age?: number;
}
let person: Person = { name: "burak", age: 5 };


interface Persona {
  name: string;
  age?: number
}
interface Guy extends Person {
  profession: string;
}

type X = {
  a: string;
  b: number;
}


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("");
    }

  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
