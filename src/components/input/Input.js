import React, { Component } from 'react'

class Input extends Component {

    constructor (props) {
        super(props)
    }

    handleInput = (e) => {
        this.props.textString(e.target.value)
    }

    render () {
        return (
            <div className="task-input--actions center">
                <input onChange={this.handleInput} className="App__input" type="text" placeholder="type some movie title" />  
            </div>
        )
    }

} 

export default Input