import React from 'react';
import './App.scss';
import pokemons from './pokemons';
import PokeList from './components/PokeList'

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
          <PokeList data={this.state.pokemons}/>
        </main>
      </div>
    );
  }
}

export default App;


