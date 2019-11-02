import React from 'react'
import Todolist from './TodoList'
import AddTodo from './AddTodo'

class Todos extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            todos:[
                {name: 'learn react', completed: false},
                {name: 'walk the dog', completed: false},
                {name: 'watch the football game', completed: false}
            ]

        }
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Todolist items={this.state.todos}/>
                <AddTodo/>
            </div>
        )
    }
}

export default Todos