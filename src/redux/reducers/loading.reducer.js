const defaultState = {
	show: false,
};

const LoadingReducer = (state = defaultState, action) => {
	if (action.type === 'TOGGLE_LOADING') {
		return {
			type: action.type,
			show: action.show
		};
	}
	return state;
};

export default LoadingReducer;
