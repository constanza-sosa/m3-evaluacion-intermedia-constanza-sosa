import React from 'react';
import './App.scss';
import pokemons from './pokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Mi lista de pokemon
          </h1>
        </header>
        <main className="App-main">
          <ul className="Pokemon-list">
          {this.state.pokemons
          .map((pokemon) => {
          return (
            <li key={pokemon.id} className="Pokemon-list-item">
              <div className="Pokemon-item-container">
                <img className="Pokemon-img"
                  src={pokemon.url}
                  alt={pokemon.name}></img>
                <h2 className="Pokemon-name">{pokemon.name}</h2>
                <ul className="Pokemon-type-list">
                  {pokemon.types
                  .map((type, index) => {
                    return (
                      <li key={index} className="Pokemon-type">{type}</li>
                    )
                  })}
                </ul>
              </div>
            </li>
            
          );
          })}


          </ul>
        </main>
      </div>
    );
  }
}

export default App;


