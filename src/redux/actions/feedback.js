import { FEEDBACK, LOGOUT } from '../actionTypes'
import API_END_POINT from '../../app';
import browserHistory from '../../history';

export const feedback = (params) => {
	console.log(params);
	return (dispatch) => {
		const URL = `${API_END_POINT}feedback`;
		return fetch(URL, {
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
				console.log('Sucess feedback', json)
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
						console.log('Sucess LOGOUT', response)
						localStorage.clear();
						browserHistory.push('/login');
						dispatch({
							type: LOGOUT,
						})
					})
			})
			.catch(error => {
				console.log('Error feedback', json)
			})
	}

}
