import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  render () {
    return (
      <ul>{lista.map((valor) => Task(valor))}</ul>
    );
  }
}

export default App;
