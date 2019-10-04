import React, { Component } from 'react';

import Input from './components/input/Input'
import Nav from './components/nav/Nav'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import './App.css';


class App extends Component{

  render () {
    
    const moviesFakeData = [{
      title: 'Matrix',
      duration: '136min',
      year: '1999',
      plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      image: 'https://img.elo7.com.br/product/main/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg'
    },{
      title: 'Star Wars: Last Jedi',
      duration: '134min',
      year: '1983',
      plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg'
    }]

    const moviesList = moviesFakeData.map(m => {
      return (
        <Card movie={m} />
      )
    })

    return (
      <div className="App center">

			<div className="App--wrapper center">

				<div className="App--task-input center">
					<h1> Movies App </h1>
					<Input />
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