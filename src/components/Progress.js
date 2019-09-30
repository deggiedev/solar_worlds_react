import React from 'react';
import '../App.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Progress extends React.Component {
  
  state = {
    percentage: null
  }

  convertToPercentage = () => {
    const divide = this.props.progress / 27
    return Math.round(divide * 100)
  }

  render() {
    return (
      <div className="Progress">
        <CircularProgressbar  className={'Progressbar'} text={`${this.convertToPercentage()}%`}/>
      </div>
      );
    }
  }

export default Progress;

