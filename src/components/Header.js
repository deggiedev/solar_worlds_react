import React from 'react';
import NasaLogo from '../images/nasa_logo.png'

class Header extends React.Component {

    state = {
        progressPercentage: null
    }

render() {
  return (
        <div>
            <img className={'NasaLogo'} alt={''} src={NasaLogo}></img>
            <h1 className={"Header"}>Solar Worlds</h1>
        </div>
        );
    }
}

export default Header;