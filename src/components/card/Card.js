import React from 'react'
import Icon from '../../assets/icons/Icon'

const Card = (props) => {
    console.log(props)
    const style = {
        backgroundImage: 'url('+props.movie.image+')'
    }

    return (
        <div className="task--card">
            <div className="image-wrapper">
              <div className="image" style={style} ></div>
            </div>
            <div className="card--content">
              <h1>{props.movie.title}</h1>
              <span>{props.movie.duration} - {props.movie.year}</span>
              <div className="card--text">
                <h4>Plot</h4>
                <p>{props.movie.plot}</p>
              </div>
              <div className="card--actions">
                <button className="App__button">Add</button>
              </div>
            </div>
        </div>
    )
}

export default Card