import React, { Component } from 'react'
import {connect} from 'react-redux'

class Auth extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       username: "",
       password: "",
       newUser: false
    }
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


 const mapStateToProps = state => state 
export default Auth

