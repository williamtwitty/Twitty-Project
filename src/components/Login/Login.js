import React, { Component } from 'react';
import './Login.css'
import logo from '../../logo.svg'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="inner-login">
                <div className="header">
                    Twitty Tracker
                </div>
                <div>
                <img src={logo} alt="logo"/>
                </div>
                <div><a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a></div>
                </div>
            </div>
        );
    }
}

export default Login;