import {LOGIN} from '../actionTypes'
import API_END_POINT from '../../app'


export const login = (params) => {
  return (dispatch) => {
    const URL = `${API_END_POINT}login`;
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(json => {
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
