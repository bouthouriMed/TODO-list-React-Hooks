import React, { Component } from 'react'
import Template from './components/Template'
import AddTodo from './components/AddTodo'
import "./App.css"


class App extends Component {

  state = {
    todos : [
      {id:1 , content: "wake up",isComplete:false,background:""},
      {id:2 , content: "brush my teeth",isComplete:false,background:""},
      {id:3 , content: "eat breakfast",isComplete:false,background:""}
    ]
  }

  deleteTodo = (id) => {
    let todosF = this.state.todos.filter( todo => {
      return todo.id !== id ;
    })

    this.setState({
      todos : todosF 
    })
  }

  addTodo = (todo) => {
    const newTodo = {
      content : todo , id : Math.random()
    }
    let todosA = [...this.state.todos,newTodo] ;
    this.setState({
      todos : todosA 
    })
  } 


  

  handleEdit = (edit,id) => {
   
    const todosE = this.state.todos.map(todo=>
      (todo.id===id) ? (
        {...todo,content:edit} 
      ) : (todo)
    )
   this.setState({
     todos : todosE
   })
  console.log(todosE)
 
  }

handleDone=(id)=>{
  const todosD = this.state.todos.map(todo=>
    (todo.id===id) ? (
      {...todo,isComplete:!todo.isComplete} 
    ) : (todo)
  )
 this.setState({
   todos : todosD
 })
}

   
  
  

  render() {
    return (
      <div className="container" >
        <h1 className="center blue-text"> My todo list </h1>
        <Template todos={this.state.todos} deleteTodo={this.deleteTodo} handleEdit={this.handleEdit} handleDone={this.handleDone} /> 
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App

