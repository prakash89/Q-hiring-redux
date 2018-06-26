import {LOGIN} from '../actionTypes';
import API_END_POINT from '../../app';
import browserHistory from '../../history';


export const login = (params) => {
  return (dispatch) => {
    const URL = `${API_END_POINT}login`;
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(json => {
      if (json.session) {
        localStorage.setItem('idToken', json.session.authToken);
        localStorage.setItem('userEmail', json.user.email);
        localStorage.setItem('userRole', json.user.userRole);
      }
      dispatch({
        type: LOGIN,
        payload: json
      })

      return json
    })
    .catch( error => {
      console.log("error",error);
    })
  }
}
