import React, { Component } from 'react'
import Template from './components/Template'
import AddTodo from './components/AddTodo'

class App extends Component {

  state = {
    todos : [
      {id:1 , content: "wake up"},
      {id:2 , content: "brush my teeth"},
      {id:3 , content: "eat breakfast"}
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

  render() {
    return (
      <div className="container" >
        <h1 className="center blue-text"> My todo list </h1>
        <Template todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App

