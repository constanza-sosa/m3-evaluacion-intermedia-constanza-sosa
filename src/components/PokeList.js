import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {

    return (
      <React.Fragment>
          <ol className="Pokemon-list">
          {this.props.data
          .map((pokemon) => {
          return (
            <li key={pokemon.id} className="Pokemon-list-item">
              <Pokemon 
                url = {pokemon.url}
                name = {pokemon.name}
                types = {pokemon.types}
              />
            </li>
          );
          })}
          </ol>
        </React.Fragment>
    );
  }
}

PokeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;
