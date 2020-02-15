const defaultState = {
	info: null,
	results: null
};

const EpisodesReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_EPISODES':
		return {
			...state,
			info: action.info,
			results: action.results,
		};
	default:
		return state;
	}
};

export default EpisodesReducer;
