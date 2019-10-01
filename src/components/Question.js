import React from 'react';
import {withRouter} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Question extends React.Component {

render() {
  return (
        <div >
            <Button size='massive' inverted color='yellow' className="Question" onClick={() => this.props.history.push(`/answer/${this.props.question.answer.id}`)} fluid>{this.props.question.question}</Button><br></br>   
        </div>
        );
    }
}

export default withRouter(Question);