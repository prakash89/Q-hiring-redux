import { QUESTIONSLIST } from "../actionTypes";

export const questionsList = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/allQuestions';
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