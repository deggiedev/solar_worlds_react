import React from 'react';
import ShortAnswer from './ShortAnswer'
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
        }).then(this.setState({pageRead: true}))
    }

render() {
  return (
        <div className="AnswerPageContainer" >
          <ShortAnswer pageRead={this.state.PageRead} handleReadPost={this.handleReadPost} answer={this.state.answer} />
          <ImageContainer answer={this.state.answer} currentPlanet={this.state.currentPlanet}/>
        </div>
        );
    }
}

export default withRouter(AnswerPageContainer);