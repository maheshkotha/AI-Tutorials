import React, { useState } from "react";
import TodoList from "./TodoList";

const App = ({message}) => {
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'Take out the garbage', isCompleted: true},
    {text: 'Make dinner', isCompleted: true}
  ]);
  const [incompletedTodos, setIncompletedTodos] = useState([
    {text: 'Paint the house', isCompleted: false}
  ])
  return <>
    <TodoList completedTodos={completedTodos} incompletedTodos={incompletedTodos}/>
  </>
}

export default App;