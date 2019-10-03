import React from 'react';
import './App.css';
import './stars.css';
import PlanetsContainer from './PlanetsContainer'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'

class MainContainer extends React.Component {

  componetDidMount() {
    document.body.scrollTop = 0;
  }
   
  render() {
    return (
      <div className="MainContainer">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <Header user={this.props.user.username}/>
        <ProgressBar progress={this.props.progress.length} />
        <div className="SideAndPlanetContainer">
        <PlanetsContainer questions={this.props.questions} selectedPlanet={this.props.selectedPlanet} planets={this.props.planets} planetClick={this.props.planetClick}/>
        <>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </>
        </div>
      </div>
      );
    }
  }

export default MainContainer;
