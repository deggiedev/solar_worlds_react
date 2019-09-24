import React from 'react'
import UserForm from './UserForm'
import Header from './Header'

const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <nav>
            {
                user && !user.error ? <div><button onClick={logOut}>Log out</button></div> :
                    <>
                        <Header />
                        <UserForm submit={signUp} header={'Sign up'} />
                        or
                        <UserForm submit={logIn} header={'Log in'} />
                        <Header />
                    </>
            }
        </nav>
    )
}

export default Navbar