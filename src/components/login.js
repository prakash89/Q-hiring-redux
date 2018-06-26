import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { Redirect, HashRouter } from 'react-router-dom';
import Auth from '../Auth';
import { Button } from 'grommet';
import Box from 'grommet/components/Box';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: '',
    }
  }

  authLogin() {
    console.log("Inside the authLogin button click")
    const auth = new Auth();
    auth.login();
  }

  loginSubmit(user_params) {
    let params = {
      email: user_params.username,
      password: user_params.password
    }
    this.props.login(params).then((response)=>{
      if (response.message == "You have successfully signed up.") {
        this.props.history.push('/instruction')
      } else if (response.error) {
        this.state.formError = response.error
        this.setState({ formError: response.error })
        setTimeout(() => this.setState({ formError: '' }), 3000);
      }
    })
  }

  render() {
    return (
      <Box
        justify='center'
        align='center'
        wrap={true}
        reverse={false}
        pad='medium'
        margin='small'
      >
        <LoginForm
          title='Login'
          rememberMe = {false}
          errors = {[this.state.formError]}
          onSubmit = {(user_params) => this.loginSubmit(user_params)} />
        <Button
          label='Login through auth0'
          onClick={() => this.authLogin()} />
      </Box>
    )
  }
}

const mapStateToProps = ({ loginData }) => {
  localStorage.setItem('idToken', loginData.id_token);
  localStorage.setItem('userEmail', loginData.email);
  localStorage.setItem('userId', loginData.user_id);
  return ({
    message: loginData.message,
    idToken: loginData.id_token,
    email: loginData.email
  })
}




export default connect(mapStateToProps, { login })(Login);
