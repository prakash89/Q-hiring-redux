import {LOGIN} from '../actionTypes'

export const login = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/login'
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
