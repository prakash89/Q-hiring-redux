import { FEEDBACK } from '../actionTypes'

export const feedback = (params) => {
	debugger
	return (dispatch) => {
		const URL = 'http://localhost:3001/feedback'
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify(params),
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem('idToken'),
				"email": localStorage.getItem('userEmail')
			}
		})
			.then(response => response.json())
			.then(json => {
				debugger
				console.log('login json - ', json)
				dispatch({
					type: FEEDBACK,
					payload: json
				})
			})
			.catch(error => {
				console.log('login error - ', error)
			})
	}
}
