import React, { useState } from 'react'

function AddTodo({addTodo}) {
     
        const [content, setContent] = useState("")
        // state = {
        //     content : ""
        // }

        const handleChange = (e) => {
            setContent(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            content ? (addTodo(content)) : (alert("Please add a todo"))
            // setContent("") ;
          
            
        }
       
        
        return (
            <div>

              <form onSubmit={handleSubmit}>
                  <label> Add to do </label>
                  <input onChange={handleChange} type="text" placeholder="Add todo here" value={content}></input>
              </form>

            </div>
        )
    
}

export default AddTodo
