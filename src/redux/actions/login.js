import {LOGIN} from '../actionTypes'
import API_END_POINT from '../../app'


export const login = (params) => {
  return (dispatch) => {
    const URL = `${API_END_POINT}login`;
    console.log(params);
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: LOGIN,
        payload: json
      })
    })
    .catch( error => {
      console.log('login error - ', error)
    })
  }
}
