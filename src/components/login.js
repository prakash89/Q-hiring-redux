import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import {connect} from 'react-redux';
import {login} from '../redux/actions';
import { Redirect, HashRouter } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  loginSubmit(user_params){

    let params = {
      email: user_params.username,
      password: user_params.password
    }
    this.props.login(params)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.message == "You have successfully signed up.") {
      this.props.history.push('/instaction')
    }
  }

  render(){
    return(
      <LoginForm
        title='Login'
        rememberMe={false}
        onSubmit={(user_params) => this.loginSubmit(user_params)}/>
      )
  }
}

const mapStateToProps = ({loginData}) => {
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

export default connect(mapStateToProps,{login})(Login);
