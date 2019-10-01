import React from 'react';
import MoonPic from '../images/moon.png'

class ShowMoons extends React.Component {

render() {
  return (
        <div className="ShowMoons">
            {this.props.selectedPlanet.moons.map(moon => 
            <>
            <h5 className={'MoonName'}>{moon.moon}</h5>
            <img className={'MoonPic'} alt={''} src={MoonPic}></img>
            </>
            )}
        </div>
        );
    }
}

export default ShowMoons;