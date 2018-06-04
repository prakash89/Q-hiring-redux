import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import {connect} from 'react-redux';
import {login} from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  loginSubmit(user_params){

    console.log('loooooo', user_params)
    let params = {
      email: user_params.username,
      password: user_params.password
    }
    this.props.login(params)
    console.log('i am here');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.success) {
      console.log('logged in');
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
  console.log('loginData', loginData)
  return ({
  message: loginData.message,
  idToken: loginData.id_token
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
