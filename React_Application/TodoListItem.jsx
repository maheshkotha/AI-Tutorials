import React from 'react'

const TodoListItem = ({todo, onCompletedClick, onDeleteClick}) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      {
        todo.isCompleted && <p>Completed!</p>
      }
      {
        todo.isCompleted 
          ? <button onClick={onDeleteClick(todo.text)}>Delete Item </button>
          : <button onClick={onCompletedClick(todo.text)}>Mark as Completed</button>
      }
    </div>
  )
}

export default TodoListItem