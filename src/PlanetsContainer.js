import React from 'react';
import './App.css';
import PlanetCard from './components/PlanetCard'
import PlanetPage from './PlanetPage'
import DefaultPage from './components/DefaultPage'

class PlanetsContainer extends React.Component {
   
  render() {
    return (
      <div className="PlanetsContainer">
        {this.props.planets.map(planet => !planet.englishName.includes(1) ? <PlanetCard planet={planet} handleClick={this.props.planetClick}/> : null)}  
        {this.selectedPlanet !== 'Sun' ? <PlanetPage questions={this.props.questions} selectedPlanet={this.props.selectedPlanet}/> : <DefaultPage selectedPlanet={this.props.selectedPlanet} /> }
      </div>
      );
    }
  }

export default PlanetsContainer;

