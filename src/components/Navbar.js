import React from 'react'
import UserForm from './UserForm'
import Header from './Header'
import { Button } from 'semantic-ui-react'


const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        
        <nav>
            {
                user && !user.error ? <div className={'NavB'}><Button inverted color="white" className="LogOutButton" onClick={logOut}>Log out</Button></div> :
                    <div className="LoggedOutDiv">
                            <div id='stars'></div>
                            <div id='stars2'></div>
                            <div id='stars3'></div>
                            <Header className={'Header'}></Header> 
                        <div className="SideBySideForms">
                            <UserForm submit={signUp} header={'Sign up'}></UserForm><br></br> 
                            <UserForm submit={logIn} header={'Log in'}></UserForm> 
                        </div>
                    </div>
            }
        </nav>
    )
}

export default Navbar