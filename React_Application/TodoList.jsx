import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = ({completedTodos, incompletedTodos}) => {

  const onDeleteClick = (todo) => {

  }

  return (
    <>
      <h1>My Todos</h1>
      <NewTodoForm onCreateClicked={() => {}}/>
      <h3>Completed:</h3>
      {
        completedTodos.map((todo, index) => {
          return <TodoListItem todo={todo} key={index} onDeleteClick={() => {}} onCompletedClick={() => {}} />
        })
      }
      <h3>In Completed</h3>
      {
        incompletedTodos.map((todo, index) => {
          return <TodoListItem todo={todo} key={index} onCompletedClick={() => {}} onDeleteClick={() => {}} />
        })
      }
    </>
  )
}

export default TodoList