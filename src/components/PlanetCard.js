import React from 'react';

class PlanetCard extends React.Component {

render() {
  return (
    <div className="PlanetCard">
      <h4>{this.props.planet.englishName}</h4>
      <button onClick={() => this.props.handleClick(this.props.planet)}>show more</button>
    </div>
  );
}
}

export default PlanetCard;