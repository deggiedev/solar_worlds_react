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
    "englishName": "Jupiter",
    "moons": [
      {
        "moon": "Io",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/io"
        },
        {
        "moon": "Europe",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/europe"
        },
        {
        "moon": "Ganymède",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/ganymede"
        },
        {
        "moon": "Callisto",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/callisto"
        },
        {
        "moon": "Amalthée",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/amalthee"
        },
        {
        "moon": "Himalia",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/himalia"
        },
        {
        "moon": "Élara",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/elara"
        },
        {
        "moon": "Pasiphaé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/pasiphae"
        },
        {
        "moon": "Sinopé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/sinope"
        },
        {
        "moon": "Lysithéa",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/lysithea"
        },
        {
        "moon": "Carmé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/carme"
        },
        {
        "moon": "Ananké",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/ananke"
        },
        {
        "moon": "Léda",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/leda"
        },
        {
        "moon": "Thébé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/thebe"
        },
        {
        "moon": "Adrastée",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/adrastee"
        },
        {
        "moon": "Métis",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/metis"
        },
        {
        "moon": "Callirrhoé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/callirrhoe "
        },
        {
        "moon": "Thémisto",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/themisto "
        },
        {
        "moon": "Mégaclité",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/megaclite "
        },
        {
        "moon": "Taygété",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/taygete "
        },
        {
        "moon": "Chaldéné",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/chaldene "
        },
        {
        "moon": "Harpalyké",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/harpalyke "
        },
        {
        "moon": "Kalyké",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/kalyke "
        },
        {
        "moon": "Iocasté",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/iocaste "
        },
        {
        "moon": "Erinomé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/erinome "
        },
        {
        "moon": "Isonoé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/isonoe "
        },
        {
        "moon": "Praxidyké",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/praxidike "
        },
        {
        "moon": "Autonoé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/autonoe "
        },
        {
        "moon": "Thyoné",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/thyone "
        },
        {
        "moon": "Hermippé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/hermippe "
        },
        {
        "moon": "Aitné",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/aitne "
        },
        {
        "moon": "Eurydomé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/eurydome "
        },
        {
        "moon": "Euanthé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/euanthe "
        },
        {
        "moon": "Euporie",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/euporie "
        },
        {
        "moon": "Orthosie",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/orthosie "
        },
        {
        "moon": "Spondé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/sponde "
        },
        {
        "moon": "Calé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/cale "
        },
        {
        "moon": "Pasithée",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/pasithee "
        },
        {
        "moon": "Hégémone",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/hegemone "
        },
        {
        "moon": "Mnémé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/mneme "
        },
        {
        "moon": "Aoedé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/aoede "
        },
        {
        "moon": "Thelxinoé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/thelxinoe "
        },
        {
        "moon": "Arché",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/arche "
        },
        {
        "moon": "Callichore",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/callichore "
        },
        {
        "moon": "Hélicé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/helice "
        },
        {
        "moon": "Carpo",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/carpo "
        },
        {
        "moon": "Eukéladé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/eukelade "
        },
        {
        "moon": "Cyllène",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/cyllene "
        },
        {
        "moon": "Coré",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/core "
        },
        {
        "moon": "Hersé",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/herse "
        },
        {
        "moon": "S/2003 J 2",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j2 "
        },
        {
        "moon": "Euph&eacute;m&eacute;",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/eupheme"
        },
        {
        "moon": "S/2003 J 4",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j4 "
        },
        {
        "moon": "Eir&eacute;n&eacute;",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/eirene"
        },
        {
        "moon": "S/2003 J 9",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j9 "
        },
        {
        "moon": "S/2003 J 10",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j10 "
        },
        {
        "moon": "S/2003 J 12",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j12 "
        },
        {
        "moon": "Philophrosyne",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/philophrosyne"
        },
        {
        "moon": "S/2003 J 16",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j16 "
        },
        {
        "moon": "S/2003 J 18",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j18 "
        },
        {
        "moon": "S/2003 J 19",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j19 "
        },
        {
        "moon": "S/2003 J 23",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j23 "
        },
        {
        "moon": "Dia",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/dia"
        },
        {
        "moon": "S/2010 J 1",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2010j1"
        },
        {
        "moon": "S/2010 J 2",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2010j2"
        },
        {
        "moon": "S/2011 J 1",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2011j1"
        },
        {
        "moon": "S/2011 J 2",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2011j2"
        },
        {
        "moon": "S/2017 J 1",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j1"
        },
        {
        "moon": "S/2016 J 1",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2016j1"
        },
        {
        "moon": "Valétudo",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/valetudo"
        },
        {
        "moon": "S/2017 J 2",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j2"
        },
        {
        "moon": "S/2017 J 3",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j3"
        },
        {
        "moon": "Pandia",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/pandia"
        },
        {
        "moon": "S/2017 J 5",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j5"
        },
        {
        "moon": "S/2017 J 6",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j6"
        },
        {
        "moon": "S/2017 J 7",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j7"
        },
        {
        "moon": "S/2017 J 8",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j8"
        },
        {
        "moon": "S/2017 J 9",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j9"
        },
        {
        "moon": "Ersa",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/ersa"
        }
      ],
      "perihelion": 740379835,
      "aphelion": 816620000,
      "gravity": 24.79
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
    
      return this.state.reads.filter(read => read.user_id === user.id)
      
    
  }

render() {
  return (
    <div className="App">
      
      {<Navbar className="Navbar" user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/>}
      {this.state.user && !this.state.user.error ? 
      (<Switch>
      <Route path={'/answer/:id'} component={AnswerPageContainer}/>
      <Route path={'/'} render={() => <MainContainer user={this.state.user} progress={this.updateUserProgress(this.state.user)} questions={this.state.questions} selectedPlanet={this.state.selectedPlanet} planets={this.state.planets} logOut={this.logOut} planetClick={this.planetClick}/>}/>      
      </Switch>)
       : null}
       
    </div>
  );
}
}

export default App;
