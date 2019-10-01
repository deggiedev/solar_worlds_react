import React from 'react';
import MoonPic from '../images/moon.png'

class MoonCard extends React.Component {

render() {
  return (
        <div className="MoonCard">
           <br></br><h5 className={'MoonName'}>{this.props.moon.moon}</h5>
            <img className={'MoonPic'} alt={''} src={MoonPic}></img>
        </div>
        );
    }
}

export default MoonCard;