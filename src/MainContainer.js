import React from 'react';
import './App.css';
import PlanetsContainer from './PlanetsContainer'
import PlanetPage from './PlanetPage'
import Header from './components/Header'
import Progress from './components/Progress'

class MainContainer extends React.Component {
   
  render() {
    return (
      <div className="MainContainer">
        
        <Header progress={this.props.progress.length}/>
        <Progress progress={this.props.progress.length} />
        <PlanetsContainer selectedPlanet={this.props.selectedPlanet} planets={this.props.planets} planetClick={this.props.planetClick}/>
        <PlanetPage questions={this.props.questions} selectedPlanet={this.props.selectedPlanet}/>
      </div>
      );
    }
  }

export default MainContainer;
