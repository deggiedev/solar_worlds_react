import React from 'react';

class DefaultPage extends React.Component {

render() {
  return (
        <div className="DefaultPage">
            <h4>{this.props.planet.englishName}</h4>
            <img alt={''} src={require('../planet_images/' + this.props.planet.englishName.toLowerCase().split(" ").join('_') + '.jpg')}></img>
        </div>
        );
    }
}

export default DefaultPage;