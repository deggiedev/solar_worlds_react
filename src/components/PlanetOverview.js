import React from 'react';
import ShowMoons from './ShowMoons'

class PlanetOverview extends React.Component {

    state = {
        showMoons: false
    }

    toggleMoons = () => {
        this.setState({showMoons: !this.state.showMoons})
      }   

render() {
  return (
        <div className="PlanetOverview">
            <>
            <h1>{this.props.selectedPlanet.englishName}</h1>
            {!this.props.selectedPlanet ? <img className={'PlanetImage'} alt={''} src={require('../planet_images/solarsystem.jpg')}></img> : <img className={'PlanetImage'} alt={''} src={require('../planet_images/' + this.props.selectedPlanet.englishName.toLowerCase().split(" ").join('_') + '.jpg')}></img>}
            <p>{`The Milky Way Galaxy contains 200 billion different stars, one of these stars is home to 8 planets. This small neighbourhood is what we call The Solar System.`}</p> 
            <p>{`The Sun makes up more than 95% of all the matter in our Solar System, and provides energy to all its bodies.`}</p> 
            <p>{`${this.props.selectedPlanet.englishName} is one of these bodies that orbit The Sun. At its closest it is ${this.props.selectedPlanet.perihelion} km from our home Star, and at its farthest it is an incredible ${this.props.selectedPlanet.aphelion} km, with a gravity measurement of ${this.props.selectedPlanet.gravity} metres per second squared. This gravity measurement means if you let a body fall freely on ${this.props.selectedPlanet.englishName}, then this is the rate at which it will gain in speed towards the ground`}</p>
            <button onClick={() => this.toggleMoons()}>Show {this.props.selectedPlanet.englishName}'s Moons</button>
            {this.state.showMoons !== false ? <ShowMoons selectedPlanet={this.props.selectedPlanet} /> : null}   
            </>  
        </div>
        );
    }
}

export default PlanetOverview;