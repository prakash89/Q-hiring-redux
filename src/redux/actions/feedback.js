import { FEEDBACK } from '../actionTypes'
import {ENDPOINT} from '../../app'

export const feedback = (params) => {
	return (dispatch) => {
		const URL = ENDPOINT + 'feedback'
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