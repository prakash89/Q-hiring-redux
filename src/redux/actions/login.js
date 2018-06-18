import {LOGIN} from '../actionTypes'
import { Redirect, HashRouter } from 'react-router-dom';

export const login = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/login'
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(json => {
      console.log(`json data: ${JSON.stringify(json)}`)
      localStorage.setItem('idToken', json.session.authToken);
      localStorage.setItem('userEmail', json.user.email);
      localStorage.setItem('userRole', json.user.userRole);
      dispatch({
        type: LOGIN,
        payload: json
      })
      if (json.user.userRole == "admin") {
        this.props.history.push('/QuestionsList')
      }else{
        this.props.history.push('/instaction')
      }

    })
    .catch( error => {
      console.log("error",error);
    })
  }
}
