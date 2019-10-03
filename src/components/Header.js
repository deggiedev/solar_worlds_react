import React from 'react';

class Header extends React.Component {

render() {
  return (
        <div>
            {this.props.user ? <h5 className="UserName">WELCOME TO SPACE {this.props.user.toUpperCase()}</h5> : null}
            <h1 className={"Header"}>Solar Worlds</h1>            
        </div>
        );
    }
}

export default Header;