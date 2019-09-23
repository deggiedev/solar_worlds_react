import React from 'react';

class PlanetPage extends React.Component {

render() {
  return (
    <div className="PlanetPage">
      <h1>{this.props.selectedPlanet.englishName}</h1>
    </div>
  );
}
}

export default PlanetPage;