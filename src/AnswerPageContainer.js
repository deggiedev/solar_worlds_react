import React from 'react';
import AnswerHeader from './AnswerHeader'
import ShortAnswer from './ShortAnswer'
import ExtraAnswerInfo from './ExtraAnswerInfo'
import ImageContainer from './ImageContainer'


class AnswerPageContainer extends React.Component {

    getAnswers = () => {
        return fetch(`http://localhost:3000/answers/${this.props.match.params.id}`)
        .then(resp => resp.json())
    }

    state = {
        answer: [],
        currentPlanet: null,
    }

    componentDidMount() {
        this.getAnswers()
        .then(answer => this.setState({answer, currentPlanet: answer.answer.split(' ')[0].toLowerCase()}))
    }

render() {
  return (
        <div className="AnswerPageContainer" >
          <AnswerHeader answer={this.state.answer}/>
          <ShortAnswer answer={this.state.answer} />
          <ExtraAnswerInfo answer={this.state.answer}/>
          <ImageContainer currentPlanet={this.state.currentPlanet}/>
        </div>
        );
    }
}

export default AnswerPageContainer;