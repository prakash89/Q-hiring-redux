import {SIGNUP} from '../actionTypes'
import API_END_POINT from '../../app'

export const signup = (params) => {
  return(dispatch) => {
    const URL = `${API_END_POINT}register`;
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: SIGNUP,
        payload: json
      })
    })
    .catch(error => {
    })
  }
}
