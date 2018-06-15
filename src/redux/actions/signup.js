import {SIGNUP} from '../actionTypes'

export const signup = (params) => {
  return(dispatch) => {
    const URL = 'http://localhost:3001/register'
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(json => {
      console.log('response', json)
      dispatch({
        type: SIGNUP,
        payload: json
      })
    })
    .catch(error => {
      console.log('error response', error)
    })
  }
}
