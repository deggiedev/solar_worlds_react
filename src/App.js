import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import API from './adapters/API';
import MainContainer from './MainContainer'
import AnswerPageContainer from './AnswerPageContainer'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: undefined,
    planets: [],
    selectedPlanet: {
    "englishName": "Uranus",
    "moons": [
      {
      "moon": "Ariel",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/ariel"
      },
      {
      "moon": "Umbriel",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/umbriel"
      },
      {
      "moon": "Titania",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/titania"
      },
      {
      "moon": "Obéron",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/oberon"
      },
      {
      "moon": "Miranda",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/miranda"
      },
      {
      "moon": "Cordélia",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/cordelia"
      },
      {
      "moon": "Ophélie",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/ophelia"
      },
      {
      "moon": "Bianca",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/bianca"
      },
      {
      "moon": "Cressida",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/cressida"
      },
      {
      "moon": "Desdémone",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/desdemona"
      },
      {
      "moon": "Juliette",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/juliet"
      },
      {
      "moon": "Portia",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/portia"
      },
      {
      "moon": "Rosalinde",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/rosalind"
      },
      {
      "moon": "Belinda",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/belinda"
      },
      {
      "moon": "Puck",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/puck"
      },
      {
      "moon": "Caliban",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/caliban"
      },
      {
      "moon": "Sycorax",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/sycorax"
      },
      {
      "moon": "Prospero",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/prospero"
      },
      {
      "moon": "Setebos",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/setebos"
      },
      {
      "moon": "Stephano",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/stephano"
      },
      {
      "moon": "Trinculo",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/trinculo"
      },
      {
      "moon": "Francisco",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/francisco"
      },
      {
      "moon": "Margaret",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/margaret"
      },
      {
      "moon": "Ferdinand",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/ferdinand"
      },
      {
      "moon": "Perdita",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/perdita"
      },
      {
      "moon": "Mab",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/mab"
      },
      {
      "moon": "Cupid",
      "rel": "https://api.le-systeme-solaire.net/rest/bodies/cupid"
      }
      ],
      "perihelion": 2147483647,
      "aphelion": 2147483647,
      "gravity": 8.87
    },
    questions: [],
    reads: [],
    userProgress: null
  }

 getPlanets = () => {
    return fetch(`http://localhost:3000/planets`)
    .then(resp => resp.json())
 }

 getQuestions = () => {
   return fetch('http://localhost:3000/questions')
   .then(resp => resp.json())
 }

 getReads = () => {
   return fetch('http://localhost:3000/reads')
   .then(resp => resp.json())
 }

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })  
      .then(this.getPlanets)
      .then(planets => this.setState({ planets }))
      .then(this.getQuestions) 
      .then(questions => this.setState({questions}))  
      .then(this.getReads)
      .then(reads => this.setState({reads}))
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  planetClick = (planetObj) => {
      this.setState({selectedPlanet: planetObj})
  }

  handleMoonClick = () => {
    this.setState({showMoons: !this.state.showMoons})
  }

  updateUserProgress = (user) => {
    if(this.state.reads) {
      return this.state.reads.filter(read => read.user_id === user.id)
    }
  }

render() {
  return (
    <div className="App">
      {<Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/>}
      {this.state.user && !this.state.user.error ? 
      (<Switch>
      <Route path={'/answer/:id'} component={AnswerPageContainer}/>
      <Route path={'/'} render={() => <MainContainer progress={this.updateUserProgress(this.state.user)} questions={this.state.questions} selectedPlanet={this.state.selectedPlanet} planets={this.state.planets} logOut={this.logOut} planetClick={this.planetClick}/>}/>
      </Switch>)
       : null}
     
    </div>
  );
}
}

export default App;
