import React from 'react';
import {withRouter} from 'react-router-dom'

class Question extends React.Component {

render() {
  return (
        <div className="Question" onClick={() => this.props.history.push(`/answer/${this.props.question.answer.id}`)}>
            <h3>{this.props.question.question}</h3>   
        </div>
        );
    }
}

export default withRouter(Question);