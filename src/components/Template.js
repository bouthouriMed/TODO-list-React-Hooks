import React from 'react'

function Template({todos,deleteTodo}) {

  const todoList = todos.length ? (
    todos.map( todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className="mySpan" style={{display:'flex',justifyContent:'space-between'}}> {todo.content}  <button onClick={()=> deleteTodo(todo.id)} className="btn waves-effect waves-light btn-small" type="submit" name="action">Delete </button></span>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no todo's left </p>
  )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Template
