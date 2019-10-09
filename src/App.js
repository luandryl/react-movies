import React, { Component } from 'react';
import { Http } from './services/Http'

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
    const movies = await Http.getMovies(text)
    this.setState({movies, isLoading: false})
  }

  render () {
    
    const { movies } = this.state

    const moviesList = movies && movies.map((m) => {
      return (
        <Card movie={m} key={m.id} />
      )
    })

    return (
      <div className="App center">

			<div className="App--wrapper center">

				<div className="App--task-input center">
					<h1> Movies App </h1>
					<Input textString={this.getInput} />
          <Nav />
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