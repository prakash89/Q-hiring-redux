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
