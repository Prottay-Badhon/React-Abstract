import React, {Component} from 'react';

class Login extends Component {

    loginCheck=()=>{
        sessionStorage.setItem("userName","Badhon")
    }
    render() {
        return (
            <div>
                <button onClick={this.loginCheck}>Login</button>
            </div>
        );
    }
}

export default Login;