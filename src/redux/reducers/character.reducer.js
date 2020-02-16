const defaultState = {
	data: null
};

const CharacterReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_CHARACTER':
		return {
			...state,
			episode: action.episode
		};
	default:
		return state;
	}
};

export default CharacterReducer;
