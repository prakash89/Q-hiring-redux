import {INSTRUCTION} from '../actionTypes'
import API_END_POINT from '../../app'

export const fetchInstructions = () => {
  return (dispatch) => {
    const URL = `${API_END_POINT}instruction`;
    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('idToken'),
        "email": localStorage.getItem('userEmail')
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log('fetchInstructions success- ', json)
      dispatch({
        type: INSTRUCTION,
        instruction: json.exam
      })
    })
    .catch(error => {
      console.log('fetchInstructions  error - ', error)
    })
  } 
}