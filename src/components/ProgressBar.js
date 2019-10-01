import React from 'react';
import '../App.css';
import { Progress } from 'semantic-ui-react'

class ProgressBar extends React.Component {
  
  state = {
    percentage: null
  }

  convertToPercentage = () => {
    const divide = this.props.progress / 27
    return Math.round(divide * 100)
  }

  render() {
    return (
      <div className="ProgressBar">
        <h5 className={'ProgressHeader'}>PROGRESS</h5>
        <Progress size='medium' inverted color='black' percent={this.convertToPercentage()}  progress /> 
      </div>
      );
    }
  }

export default ProgressBar;

