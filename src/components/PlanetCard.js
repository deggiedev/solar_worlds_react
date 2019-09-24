import React from 'react';

class PlanetCard extends React.Component {

render() {
  return (
        <div className="PlanetCard" onClick={() => this.props.handleClick(this.props.planet)}>
            <h4>{this.props.planet.englishName}</h4>
            <img alt={''} src={'https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521'}></img>
        </div>
        );
    }
}

export default PlanetCard;