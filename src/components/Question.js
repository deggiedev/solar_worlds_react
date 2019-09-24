import React from 'react';
import {withRouter} from 'react-router-dom'

class Question extends React.Component {

render() {
  return (
        <div className="Question" onClick={() => this.props.history.push(`/answer/${this.props.question.answer.id}`)}>
            <h4>{this.props.question.question}</h4>    
        </div>
        );
    }
}

export default withRouter(Question);