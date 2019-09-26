import React from 'react';


class ShortAnswer extends React.Component {

render() {
  return (
        <div className="ShortAnswer" >
            <h4>Short Answer</h4>
          <h5>{this.props.answer.answer}</h5>
          <button>read</button>
        </div>
        );
    }
}

export default ShortAnswer;