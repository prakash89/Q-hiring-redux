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

export const addQuestion = (params) => {
  console.log(`params: ${JSON.stringify(params)}`)
  return (dispatch) => {
    console.log("inside the addQuestion action ", params);
    const URL = API_END_POINT + 'createQuestion';
    fetch(URL, {
      method: 'POST',
      headers: {
        "email": localStorage.getItem("userEmail"),
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("idToken")
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("add question response:", responseJson)
      })
  }
}