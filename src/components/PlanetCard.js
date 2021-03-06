import React from 'react';

class PlanetCard extends React.Component {

render() {
  return (
        <div className="PlanetCard" onClick={() => this.props.handleClick(this.props.planet)}>
            <h5>{this.props.planet.englishName}</h5>
            <img className={'CardImage'} alt={''} src={require('../planet_images/' + this.props.planet.englishName.toLowerCase().split(" ").join('_') + '.jpg')}></img>
        </div>
        );
    }
}

export default PlanetCard;