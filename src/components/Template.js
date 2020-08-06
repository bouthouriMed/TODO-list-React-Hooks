import React from 'react'
import EditTodo from './EditTodo'

function Template({todos,deleteTodo,handleEdit,handleDone}) {



   
  
  const todoList = todos.length ? (
    todos.map( todo => {
      return (
        <div className="collection-item" key={todo.id}  style={todo.isComplete ? {border :'1px green solid'} :{}} >
          <span className="mySpan" style={{display:'flex',justifyContent:'space-between'}}  >
             {todo.content}  
             <div style={{display:'flex',justifyContent:'space-between',width:'25%'}} > 
                <EditTodo handleEdit={handleEdit} todoId={todo.id} todoContent={todo.content}/> 
                <button onClick={()=> deleteTodo(todo.id)} className="btn waves-effect waves-light btn-small" type="submit" name="action" >Del</button>
                <button onClick={()=>handleDone(todo.id)} className="btn waves-effect waves-light btn-small done"  type="submit" name="action"  style={todo.isComplete ? {backgroundColor:'red'} : {backgroundColor:'green'} }>{todo.isComplete ? ("Undo") : ("Done") }</button>

             </div>
          </span>
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

