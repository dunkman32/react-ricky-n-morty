const defaultState = {
	data: null
};

const EpisodeReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_EPISODE':
		return {
			...state,
			episode: action.episode
		};
	default:
		return state;
	}
};

export default EpisodeReducer;
