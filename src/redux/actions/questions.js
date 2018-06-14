import { QUESTIONSLIST } from "../actionTypes";

export const questionsList = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/allQuestions';
    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNTI4OTQ0MTUwLCJleHAiOjE1Mjg5NDc3NTB9.3BOPTIBxHmHUzEQTwHBiRXId6i57_rq9nlF0YurFYZY"
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