import React, { Component } from 'react'
import Nav from './../../components/nav/Nav'
import Footer from './../../components/footer/Footer'
import Card from './../../components/card/Card'

import { Storage } from './../../services/Storage'
import { Http } from '../../services/Http'

class Favorites extends Component {

    state = {
        movies: []
    }

    componentDidMount = async () => {
        const moviesIDs = Storage.load()
        const movies = await Http.loadById(moviesIDs)
        this.setState({movies})
    }
    
    render () {
        const { movies } = this.state
        const moviesList = movies && movies.map((m) => {
            return (
              <Card movie={m} key={m.id} addFavorite={this.addFavorite}/>
            )
          })
        return ( 
            <div className="App center">

			<div className="App--wrapper center">

				<div className="App--task-input center">
					<h1> Movies App </h1>
                    <Nav 
                        path='/'
                        name='Home' 
                    />
				</div>

				<div className="App--task-list center">
                    <div className="task--list">
                        {moviesList}
                    </div>
				</div>
			</div>
			<Footer />
		</div>
        )
    }

}

export default Favorites