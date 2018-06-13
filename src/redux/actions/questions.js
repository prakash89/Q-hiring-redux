import { QUESTIONSLIST } from "../actionTypes";

export const questionsList = (params) => {
  console.log(`questionsList action get called`)
  return (dispatch) => {
    const URL = 'http://localhost:3001/allQuestions';
    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNTI4ODU2MzEzLCJleHAiOjE1Mjg4NTk5MTN9.zraZMab1UvUsahotLz9nv-WACyEzARYAj3opg7wLLj4"
      }
    })
    .then(response => response.json())
      .then(responseJson => {
        console.log(`responseJson: ${responseJson.data}`)
        dispatch({
          type: QUESTIONSLIST,
          payload: responseJson.data
        })
    })
  }
}