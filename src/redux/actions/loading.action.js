const toggleLoading = condition => dispatch => dispatch({
	type: 'TOGGLE_LOADING',
	show: condition
});


export default toggleLoading;
