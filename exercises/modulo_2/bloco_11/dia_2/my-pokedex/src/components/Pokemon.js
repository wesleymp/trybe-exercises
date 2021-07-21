import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Pokedex</h1>
        {this.props.info.map((pokemon) =>
        <div className="card" key={ pokemon.id }>
          <img src={ pokemon.image } alt={ pokemon.name } />
          <div className="infos">
            <p>{ pokemon.name }</p>
            <p>{ pokemon.type }</p>
            <p> Peso médio { pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
          </div>
        </div>)}
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string
}

export default Pokemon;
