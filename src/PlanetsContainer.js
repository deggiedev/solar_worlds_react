import React from 'react';
import './App.css';
import PlanetCard from './components/PlanetCard'

class PlanetsContainer extends React.Component {
   
  render() {
    return (
      <div className="PlanetsContainer">
        {this.props.planets.map(planet => !planet.englishName.includes(1) ? <PlanetCard planet={planet} handleClick={this.props.planetClick}/> : null)}        
      </div>
      );
    }
  }

export default PlanetsContainer;

