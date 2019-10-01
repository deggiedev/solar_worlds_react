import React from 'react';
import ShowMoons from './ShowMoons'
import { Button } from 'semantic-ui-react'
import { Container, Divider } from 'semantic-ui-react'

class PlanetOverview extends React.Component {

    state = {
        showMoons: false
    }

    toggleMoons = () => {
        this.setState({showMoons: !this.state.showMoons})
      }   

render() {
  return (
        <Container className='PlanetOverview' >
            <img className={'PlanetImage'} alt={''} src={require('../planet_images/' + this.props.selectedPlanet.englishName.toLowerCase().split(" ").join('_') + '.jpg')}></img>
            {this.props.selectedPlanet.moons !== null ? <Button className={'ShowMoonsButton'} size='massive' color='white' onClick={() => this.toggleMoons()} fluid>The Moons of {this.props.selectedPlanet.englishName}</Button> : null }  
            {this.state.showMoons !== false ? <ShowMoons selectedPlanet={this.props.selectedPlanet} /> : null} 
            <h1 className={'PlanetHeader'} >{this.props.selectedPlanet.englishName}</h1>
            <div className={'OverviewParagraph'}>
            <p>{`The Milky Way Galaxy contains 200 billion different stars, one of these stars is home to 8 planets. This small neighbourhood is what we call The Solar System.`}</p> 
            <p>{`The Sun makes up more than 95% of all the matter in our Solar System, and provides energy to all its bodies.`}</p> 
            <p>{`${this.props.selectedPlanet.englishName} is one of these bodies that orbit The Sun. At its closest it is ${this.props.selectedPlanet.perihelion} km from our home Star, and at its farthest it is an incredible ${this.props.selectedPlanet.aphelion} km, with a gravity measurement of ${this.props.selectedPlanet.gravity} metres per second squared. This gravity measurement means if you let a body fall freely on ${this.props.selectedPlanet.englishName}, then this is the rate at which it will gain in speed towards the ground`}</p>
            </div>   
        </Container>
       
        );
    }
}

export default PlanetOverview;