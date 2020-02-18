const defaultState = {
	info: null,
	results: null,
	episodes: null
};

const EpisodesReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_EPISODES':
		return {
			...state,
			info: action.info,
			results: action.results,
		};
	case 'GET_EPISODES_BY_ID':
		return {
			...state,
			episodes: action.episodes,
		};
	default:
		return state;
	}
};

export default EpisodesReducer;
