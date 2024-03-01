import React, { useState } from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import { login } from '../api/login';


export default function Login({ setToken , setID}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await login({
            username,
            password
        });
        console.log(token.data.user.id);
        setToken(token.data.token);
        setID(token.data.user.id);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}