import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Pokemon-item-container">
          <img className="Pokemon-img"
            src={this.props.url}
            alt={this.props.name}></img>
          <h2 className="Pokemon-name">{this.props.name}</h2>
          <ul className="Pokemon-type-list">
            {this.props.types
            .map((type, index) => {
              return (
                <li key={index} className="Pokemon-type">{type}</li>
              )
            })}
          </ul>
        </div>
        </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Pokemon;
