import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
            </div>
        );
    }
}

export default Login;