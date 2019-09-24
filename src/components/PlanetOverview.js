import React from 'react';

class PlanetOverview extends React.Component {

render() {
  return (
        <div className="PlanetOverview">
            <h1>{this.props.selectedPlanet.englishName}</h1>
            <p>Some Info about this planet .....</p>
            <button>Show {this.props.selectedPlanet.englishName}'s Moons</button>
        </div>
        );
    }
}

export default PlanetOverview;