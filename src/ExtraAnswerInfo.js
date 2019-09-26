import React from 'react';


class ExtraAnswerInfo extends React.Component {

render() {
  return (
        <div className="ExtraAnswerInfo" >
          <h4>Did You Know?</h4>
          <h5>{this.props.answer.didyouknow}</h5>
        </div>
        );
    }
}

export default ExtraAnswerInfo;