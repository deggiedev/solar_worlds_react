import React from 'react';
import PlanetOverview from './components/PlanetOverview'
import QuestionContainer from './components/QuestionContainer'
import Twitter from './components/Twitter'

class PlanetPage extends React.Component {

render() {
  return (
    <div className="PlanetPage">
      <PlanetOverview selectedPlanet={this.props.selectedPlanet}/> 
      <QuestionContainer questions={this.props.questions} selectedPlanet={this.props.selectedPlanet}/>
    </div>
  );
}
}

export default PlanetPage;