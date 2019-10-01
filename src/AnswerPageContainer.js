import React from 'react';
import AnswerHeader from './AnswerHeader'
import ShortAnswer from './ShortAnswer'
import ExtraAnswerInfo from './ExtraAnswerInfo'
import ImageContainer from './ImageContainer'
import {withRouter} from 'react-router-dom'


class AnswerPageContainer extends React.Component {

    getAnswers = () => {
        return fetch(`http://localhost:3000/answers/${this.props.match.params.id}`)
        .then(resp => resp.json())
    }

    state = {
        answer: [],
        currentPlanet: null,
        pageRead: null
    }

    componentDidMount() {
        this.getAnswers()
        .then(answer => this.setState({answer, currentPlanet: answer.answer.split(' ')[0].toLowerCase()}))
    }

    handleReadPost = (answerId) => {
        fetch('http://localhost:3000/reads', {
            method: 'POST',
            body: JSON.stringify({
                answer_id: answerId,
                count: 1
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
    }

render() {
  return (
        <div className="AnswerPageContainer" >
          <button onClick={() => this.props.history.push(`/`)}>Home</button>
          <AnswerHeader answer={this.state.answer}/>
          <ShortAnswer handleReadPost={this.handleReadPost} answer={this.state.answer} />
          <ExtraAnswerInfo answer={this.state.answer}/>
          <ImageContainer currentPlanet={this.state.currentPlanet}/>
        </div>
        );
    }
}

export default withRouter(AnswerPageContainer);