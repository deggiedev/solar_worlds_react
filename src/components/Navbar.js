import React from 'react'
import UserForm from './UserForm'
import Header from './Header'
import { Button } from 'semantic-ui-react'


const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <nav>
            {
                user && !user.error ? <div className={'NavB'}><Button inverted color="white" className="LogOutButton" onClick={logOut}>Log out</Button></div> :
                    <>
                        <Header className={'Header'} />
                        <UserForm submit={signUp} header={'Sign up'} />
                        <UserForm submit={logIn} header={'Log in'} />
                    </>
            }
        </nav>
    )
}

export default Navbar