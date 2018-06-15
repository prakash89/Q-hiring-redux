import { QUESTIONSLIST } from "../actionTypes";
import { API_END_POINT } from '../../app';

export const questionsList = (params) => {
  return (dispatch) => {
    const URL = API_END_POINT + 'allQuestions';
    fetch(URL, {
      method: 'GET',
      headers: {
        "email": localStorage.getItem("userEmail"),
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("idToken")
      }
    })
    .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: QUESTIONSLIST,
          payload: responseJson.data
        })
    })
  }
}