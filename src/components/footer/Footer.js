import React, { Component } from 'react'
import Icon from '../../assets/icons/Icon'

class Footer extends Component {

    render () {
        return (
            <div className="App--footer center">
				<span>make with for </span> <Icon type="heart" className="space" /> <span>unectJr trainees</span>
			</div> 
        )
    }

} 

export default Footer