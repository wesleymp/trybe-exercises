import './App.css';
import React from 'react';
import pokemons from './data.js';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <Pokemon info={ pokemons } />
    );
  }
}

export default App;
