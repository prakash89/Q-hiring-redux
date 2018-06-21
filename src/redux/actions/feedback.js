import { FEEDBACK, LOGOUT } from '../actionTypes'
import API_END_POINT from '../../app'

export const feedback = (params) => {
	return (dispatch) => {
		const URL = `${API_END_POINT}feedback`;
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
				dispatch({
					type: FEEDBACK,
					payload: json
				})
				const LOGOUT = `${API_END_POINT}logout`;
				fetch(LOGOUT, { 
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json",
						"Authorization": localStorage.getItem('idToken'),
						"email": localStorage.getItem('userEmail')
					}
				})
				.then(response => response.json())
				.then(response => {
					localStorage.clear();
					dispatch({
						type: LOGOUT,
					})
				  })
			})
			.catch(error => {
			})
	}
}
