import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { Redirect, HashRouter } from 'react-router-dom';
import Auth from '../Auth';
import { Button } from 'grommet';


class Login extends Component {
  constructor(props) {
    super(props);
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
    this.props.login(params)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message == "You have successfully signed up.") {
      this.props.history.push('/instruction')
    }
  }

  render() {
    return (
      <div>
        <LoginForm
          title='Login'
          rememberMe={false}
          onSubmit={(user_params) => this.loginSubmit(user_params)} />
        <Button
          label='Login through auth0'
          onClick={() => this.authLogin()} />
      </div>
    )
  }
}

const mapStateToProps = ({loginData}) => {
  localStorage.setItem('idToken', loginData.id_token);
  localStorage.setItem('userEmail', loginData.email);
  localStorage.setItem('userId', loginData.user_id);
  return ({
    message: loginData.message,
    idToken: loginData.id_token,
    email: loginData.email
  })
  // let {message,id_token} = loginData
  // return {message,id_token}
}

// const mapDispatchToProps(dispatch) => {
//     return({
//         loginMe: () => {dispatch(login)}
//     })
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Login);

export default connect(mapStateToProps, { login })(Login);
