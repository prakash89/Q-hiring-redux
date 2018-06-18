import React, { Component } from 'react';
import Auth from '../auth';

class Callback extends Component{
  render(){
    Auth.handleAuthentication()
    return (
      <div>callback</div>
    )
  }
}

export default Callback;