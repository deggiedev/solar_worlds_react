  
import React, { useState } from 'react'
import {Input, Button, Form, Segment } from 'semantic-ui-react'

const SignupForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
   
        <Form className={"Form"} onSubmit={e => {
            e.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <span className={"HeaderType"}>{header.toUpperCase()}</span>
            <Input className={"UsernameInput"} placeholder="Username..." type="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></Input><br></br> 
            <br></br><Input className={"PasswordInput"} placeholder="Password..." type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></Input><br></br> 
            <br></br><Button type="submit">Submit</Button>
        </Form>
        
    )
}

export default SignupForm