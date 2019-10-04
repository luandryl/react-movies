import React, { Component } from 'react'
import Icon from '../../assets/icons/Icon'

class Nav extends Component {

    render () {
        return (
            <div className="nav--wrapper">
                <Icon type="list" className="space" /><a href="#"> My list</a>
            </div>
        )
    }

} 

export default Nav