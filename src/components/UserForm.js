  
import React, { useState } from 'react'

const SignupForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className={"Form"} onSubmit={e => {
            e.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <span className={"HeaderType"}>{header}</span>
            <input className={"UsernameInput"} placeholder="Username..." type="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input className={"PasswordInput"} placeholder="Password..." type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default SignupForm