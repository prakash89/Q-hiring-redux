import React, { Component } from 'react';
import { Button, Header, Title } from 'grommet';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render(){

  	return(
  		<Header direction="row" justify="between" size="large"
        pad={{ horizontal: 'medium' }}>
        <Title>Q-Hiring</Title>
        { !(this.props.idToken) && <Link to="/login" className="padding-left-fix">LogIn</Link>}
        { !(this.props.idToken) && <Link to="/" >SignUp</Link> }
        <Link to="/instaction" >Instructions</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/questions">Questions</Link>
        { this.props.user_role === 'admin' && <Link to="/AdminQuestionsList">Admin Dashboard</Link>}
      </Header>
  		)
  }
}

  const mapStateToProps = (state) => {
  	let userRole = localStorage.getItem('userRole')
  	let idToken = localStorage.getItem('idToken')
  return ({
    user_role: userRole,
    idToken: idToken
  })
}




export default connect(mapStateToProps, { })(Navbar);
