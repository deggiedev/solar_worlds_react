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
    selectedPlanet: [],
    questions: []
  }

  getPlanets = () => {
    return fetch(`http://localhost:3000/planets`)
    .then(resp => resp.json())
 }

 getQuestions = () => {
   return fetch('http://localhost:3000/questions')
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

render() {
  return (
    <div className="App">
      {<Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/>}
      {this.state.user && !this.state.user.error ? 
      (<Switch>
      <Route path={'/answer/:id'} component={AnswerPageContainer}/>
      <Route path={'/'} render={() => <MainContainer questions={this.state.questions} selectedPlanet={this.state.selectedPlanet} planets={this.state.planets} logOut={this.logOut} planetClick={this.planetClick}/>}/>
      </Switch>)
       : null}
     
    </div>
  );
}
}

export default App;
