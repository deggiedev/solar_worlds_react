import React from 'react';

class Question extends React.Component {

render() {
  return (
        <div className="Question">
            <h4>{this.props.question.question}</h4>
        </div>
        );
    }
}

export default Question;