import { 
	QUESTIONS,
	SHOWVERBAL,
	SHOWLOGICAL,
	SHOWQUANTITATIVE,
	QUESTIONSLIST,
} from '../actionTypes'
import API_END_POINT from '../../app'

export const fetchQuestions = () => {
	return (dispatch) => {
		const URL = `${API_END_POINT}questions`;
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
				console.log('fetchQuestions success - ', json)
				dispatch({
					type: QUESTIONS,
					questions: json.exam,
				})
			})
			.catch(error => {
				console.log('fetchQuestions  error - ', error)
			})
	}
}

export const submitAnswers = (answers, section_number) => {
	var params = {
      exam: {
		   section_number: section_number,
		   answers: answers,
		   user_id: localStorage.getItem('userId'),
	    }
	};
	return (dispatch) => {
		const URL = `${API_END_POINT}results`;
		fetch(URL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem('idToken'),
				"email": localStorage.getItem('userEmail')
			},
			body: JSON.stringify(params),
		})
			.then(response => response.json())
			.then(json => {
				if (section_number === 1) {
					dispatch({
						type: SHOWLOGICAL,
					})
				}
				if (section_number === 2) {
					dispatch({
						type: SHOWQUANTITATIVE,
					})
				}
				if (section_number === 3) {
					dispatch({
						type: SHOWVERBAL,
					})
				}
				console.log('submitAnswers success - ', json)
			})
			.catch(error => {
				console.log('submitAnswers  error - ', error)
			})
	}
}


export const questionsList = (params) => {
  return (dispatch) => {
		const URL = `${API_END_POINT}allQuestions`;
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
		const URL = `${API_END_POINT}createQuestion`;
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
