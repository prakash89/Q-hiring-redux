import { QUESTIONSLIST } from "../actionTypes";

export const questionsList = (params) => {
  return (dispatch) => {
    const URL = 'http://localhost:3001/allQuestions';
    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNTI4OTc4Nzg4LCJleHAiOjE1Mjg5ODIzODh9.aS-arbQpuux2uDzaGgmb8vaxNPwUnlpJZ6-1DB-wDMY"
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