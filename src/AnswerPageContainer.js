import React from 'react';
import AnswerHeader from './AnswerHeader'
import ShortAnswer from './ShortAnswer'
import ExtraAnswerInfo from './ExtraAnswerInfo'


class AnswerPageContainer extends React.Component {

render() {
  return (
        <div className="AnswerPageContainer" >
          <h1>Title</h1>
          <AnswerHeader />
          <ShortAnswer />
          <ExtraAnswerInfo />
        </div>
        );
    }
}

export default AnswerPageContainer;