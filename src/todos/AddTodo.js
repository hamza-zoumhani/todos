import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addingToDo: false,
            name: ''
        }
    }

    render() {
        if (this.state.addingToDo) {
            return (
                <>
                    <span>
                        Name:
                </span>
                    <input type="text" />
                    <button>Add Todo</button>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={this.newTodo}>New Todo +</button>
                </>
            )
        }
    }

}

export default AddTodo