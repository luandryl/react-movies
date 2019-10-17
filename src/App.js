import React, { Component } from 'react';
import { Http } from './services/Http'
import { Storage } from './services/Storage'

import Input from './components/input/Input'
import Nav from './components/nav/Nav'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'

import './App.css';

class App extends Component{

  state = {
    movies: [],
    isLoading: false
  }

  getInput = async (text) => {
    this.setState({isLoading: true})
    const movies = await Http.loadByTitle(text)
    this.setState({movies, isLoading: false})
  }

  addFavorite = (id) => {
    Storage.save(id)
    window.alert('Movie added as favorite')
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
					<Input textString={this.getInput} />
          <Nav 
            path='/favorites/'
            name='My List' 
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

export default App