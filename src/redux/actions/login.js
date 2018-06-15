import {LOGIN} from '../actionTypes'

export const login = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/login'
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(json => {
      console.log('login json - ', json)
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
