import React, { Component } from 'react';
import Icon from './assets/icons/Icon'
import './App.css';

class App extends Component{

  render () {
    const style = {
      backgroundImage: 'url(https://img.elo7.com.br/product/main/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg)'
    }
    return (
      <div className="App center">

			<div className="App--wrapper center">

				<div className="App--task-input center">
					<h1> Movies App </h1>
					<div className="task-input--actions center">
						<input className="App__input" type="text" placeholder="type some movie title" />  
          </div>
          <div className="nav--wrapper">
            <a href="/#/"> My list</a>
          </div>
          
				</div>

				<div className="App--task-list center">

						<div className="task--list">

              <div className="task--card">
                <div className="image-wrapper">
                  <div className="image" style={style} ></div>
                </div>
                <div className="card--content">
                  <h1>Matrix</h1>
                  <span>136min - 1999</span>
                  <div className="card--text">
                    <h4>Plot</h4>
                    <p> After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.</p>
                  </div>
                  <div className="card--actions">
                    <button className="App__button">Add</button>
                  </div>
                </div>
							</div>

              <div className="task--card">
                <div className="image-wrapper">
                  <div className="image" style={style} ></div>
                </div>
                <div className="card--content">
                  <h1>Matrix</h1>
                  <span>136min - 1999</span>
                  <div className="card--text">
                    <h4>Plot</h4>
                    <p> After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.</p>
                  </div>
                  <div className="card--actions">
                    <button className="App__button">Add</button>
                  </div>
                </div>
							</div>


						</div>

				</div>


			</div>
			<div className="App--footer center">
				<span>make with for </span> <Icon type="heart" className="space" /> <span>unectJr trainees</span>
			</div> 
		</div>
    ) 
  }

}

export default App