import React from 'react';
import './App.css';

let name:string="burak";

let surname:any;


let age:number | string=5;

age="burka"
age=5;

let printName:(name:string)=>void;

let personName:unknown; 

//void returns undefined never returns nothing

let isStudent:boolean=false;

let hobbies:string[]=["sport","reading"];

let role:[number,string]=[2,"author"];

type Person={
  name:string;
  //if ? is used,then it is optional
  age?:number;
}
let person:Person={name:"burak",age:5};


interface Persona{
  name:string;
  age?:number
}
interface Guy extends Person{
  profession:string;
}
class name


type X={
  a:string;
  b:number;
}


function App() {
  return (
    <div className="App">
        <h1>{name}</h1>
    </div>
  );
}

export default App;
