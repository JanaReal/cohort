import React, { useState } from "react";

let counter = 4;

function App() {

  let [todos,setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description:"at 6pm"
  },{
    id: 2,
    title: "make dinner",
    description:"at 8 pm"
  },{
    id:3,
    title: "practice DSA",
    description:"from 10 pm"
  }]);



  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description:Math.random()
    }]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a new todo</button>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  );
}

function Todo({title,description}){

return(
  <div>
    <h1> {title}</h1>
    <h3>{description}</h3>
  </div>
)
}
export default App;
