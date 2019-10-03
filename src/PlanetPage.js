import React from 'react';
import PlanetOverview from './components/PlanetOverview'
import QuestionContainer from './components/QuestionContainer'
import Twitter from './components/Twitter'

class PlanetPage extends React.Component {

render() {
  return (
    <div className="PlanetPage">
      <PlanetOverview selectedPlanet={this.props.selectedPlanet}></PlanetOverview><br></br>
      <br></br><QuestionContainer questions={this.props.questions} selectedPlanet={this.props.selectedPlanet}></QuestionContainer>/>
    </div>
  );
}
}

export default PlanetPage;