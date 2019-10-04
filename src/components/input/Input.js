import React, { Component } from 'react'

class Input extends Component {

    render () {
        return (
            <div className="task-input--actions center">
                <input className="App__input" type="text" placeholder="type some movie title" />  
            </div>
        )
    }

} 

export default Input