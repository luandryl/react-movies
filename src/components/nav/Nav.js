import React, { Component } from 'react'
import Icon from '../../assets/icons/Icon'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="nav--wrapper">
            <Link to={props.path}>
                 {props.name}
            </Link>
        </div>
    )
}

export default Nav