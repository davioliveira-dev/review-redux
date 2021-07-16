import { USER_DETAILS } from './types';

export const getUserDetails = () => async dispatch => {
	console.log('Step 2: Inside Action Creator to make an API call');
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log('Step 3: Dispatch an Action to update the state');
		dispatch({
			type: USER_DETAILS,
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: USER_DETAILS,
			payload: [],
		});
	}
};
