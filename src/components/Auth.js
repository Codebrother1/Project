import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux/userReducer';
import axios from 'axios';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            newUser: false
        }
    }

    login = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            const user = await axios.post('/auth/login', {email, password})
            this.props.loginUser(user.data)
            this.props.history.push('/main')
        } 
        catch {
            alert('failed login attempt')
        }
    }

    register = async (e) => {
        e.preventDefault();
        const {email, username, password} = this.state;
        try {
            const user = await axios.post('/auth/register', {email, username, password})
            this.props.loginUser(user.data);
            this.props.history.push('/main')
        }
        catch {
            alert('failed register attempt')
        }
    }

    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <div className="auth">
            {!this.state.newUser ?
            <form onSubmit={this.login}>
                <h2>LOGIN</h2>
                <input 
                type='text'
                placeholder='email'
                name='email'
                value={this.state.email}
                onChange={this.changeHandler}/>
                <input 
                type='password'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.changeHandler}/>
                <input
                type="submit"
                value="Login"/>
                <button onClick={this.toggleNewUser}>Sign Up Here</button>
            </form>
            :
            <form onSubmit={this.register}>
            <h2>REGISTER</h2>
            <input 
            type='text'
            placeholder='email'
            name='email'
            value={this.state.email}
            onChange={this.changeHandler}/>
            <input 
            type='text'
            placeholder='username'
            name='username'
            value={this.state.username}
            onChange={this.changeHandler}/>
            <input 
            type='password'
            placeholder='password'
            name='password'
            value={this.state.password}
            onChange={this.changeHandler}/>
            <input
            type="submit"
            value="Login"/>
            <button onClick={this.toggleNewUser}>Log In Here</button>
        </form>
    }
        </div>
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(Auth);