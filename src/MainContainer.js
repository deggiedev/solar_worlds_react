import React from 'react';
import './App.css';
import PlanetsContainer from './PlanetsContainer'
import PlanetPage from './PlanetPage'
import Header from './components/Header'

class MainContainer extends React.Component {
   
  render() {
    return (
      <div className="MainContainer">
        
        <Header />
        <PlanetsContainer selectedPlanet={this.props.selectedPlanet} planets={this.props.planets} planetClick={this.props.planetClick}/>
        <PlanetPage questions={this.props.questions} selectedPlanet={this.props.selectedPlanet}/>
      </div>
      );
    }
  }

export default MainContainer;
