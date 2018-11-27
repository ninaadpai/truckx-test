import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/LoginSignup.css';

class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            emailError: '',
            passwordError: ''
        })
    }

    handleLogin = () => {
        this.state.email === '' ? this.setState({emailError: 'Please enter your email'}) : this.setState({emailError: ''})
        this.state.password === '' ? this.setState({passwordError: 'Please enter your password'}) : this.setState({passwordError: ''})

        if(this.state.email !== '' && this.state.password !== '') {
            const user = {
                email: this.state.email,
                password: this.state.password
            }

            this.props.loginUser(user)
        }
    }

    render() {

        return (
            <div className="login-signup-outer">

                <div className="login-signup-inner">

                    <p className="header">Log In</p>

                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        onChange={this.handleInputChange}
                        placeholder="Email"
                        value={this.state.email}
                    />
                    <span
                        className="form-errors"
                    >
                        {this.state.emailError !== '' &&
                        this.state.emailError
                        }
                    </span>

                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <span
                        className="form-errors"
                    >
                        {this.state.passwordError !== '' &&
                        this.state.passwordError
                        }
                    </span>

                    <button
                        className="form-submit"
                        onClick={() => this.handleLogin()}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        );
    }
}

export default (withRouter(LoginModal));
