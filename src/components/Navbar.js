import React from 'react'
import UserForm from './UserForm'
import Header from './Header'


const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <nav>
            {
                user && !user.error ? <div><button className={"LogOutButton"} onClick={logOut}>Log out</button></div> :
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