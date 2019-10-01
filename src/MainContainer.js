import React from 'react';
import './App.css';
import PlanetsContainer from './PlanetsContainer'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'

class MainContainer extends React.Component {
   
  render() {
    return (
      <div className="MainContainer">
        
        <Header progress={this.props.progress.length}/>
        <ProgressBar progress={this.props.progress.length} />
        <PlanetsContainer questions={this.props.questions} selectedPlanet={this.props.selectedPlanet} planets={this.props.planets} planetClick={this.props.planetClick}/>
      </div>
      );
    }
  }

export default MainContainer;
