import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import {connect} from 'react-redux';
import {login} from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  loginSubmit(fields){
    console.log('loooooo', fields)
    let params = {
      email: 'email@email.com',
      password: '123123'
    }
    this.props.login()
    console.log('i am here');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.success) {
      console.log('logged in');
    }
  }

  render(){
    return(
      <LoginForm onSubmit={() => this.loginSubmit()} />
      )
  }
}

const mapStateToProps = ({loginData}) => {
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
