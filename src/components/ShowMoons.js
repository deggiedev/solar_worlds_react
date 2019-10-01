import React from 'react';
import MoonCard from './MoonCard'

class ShowMoons extends React.Component {

render() {
  return (
        <div className="ShowMoons">
            {this.props.selectedPlanet.moons.map(moon => 
            <MoonCard moon={moon}/>
            )}
        </div>
        );
    }
}

export default ShowMoons;