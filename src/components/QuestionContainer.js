import React from 'react';
import Question from './Question'

class QuestionContainer extends React.Component {

render() {
  return (
        <div className="QuestionContainer">
           {this.props.questions.map(question => question.question.includes(this.props.selectedPlanet.englishName) ? <Question question={question} /> : null)}
        </div>
        );
    }
}

export default QuestionContainer;