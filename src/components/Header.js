import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';

class Header extends React.Component {

    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.post('/auth/logout');
    }

    render(){
    return <div className="header">
        {this.props.isLoggedIn ? 
        <div>
            <h5>Welcome, {this.props.user.username} </h5>
            <Link to="/">Login/Register</Link>
            <Link to="/main">Main</Link>
            <button onClick={this.logout}>Logout</button>
        </div>
        :
        <h1>Login</h1>
        }
    </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Header);