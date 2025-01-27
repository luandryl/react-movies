import React from 'react'
const Card = (props) => {
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
                {props.removeFav && 
                  (<button onClick={() => {props.removeFav(props.movie.id)}} className="App__button">Remove</button>
                )}
                {props.addFavorite && 
                  (<button onClick={() => {props.addFavorite(props.movie.id)}} className="App__button">Add</button>
                )}
                
              </div>
            </div>
        </div>
    )
}

export default Card