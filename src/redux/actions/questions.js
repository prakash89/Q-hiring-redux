import { QUESTIONS } from '../actionTypes'
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
				console.log('submitAnswers success - ', json)
			})
			.catch(error => {
				console.log('submitAnswers  error - ', error)
			})
	}
}
