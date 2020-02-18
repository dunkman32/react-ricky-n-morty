const defaultState = {
	character: null
};

const CharacterReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_CHARACTER':
		return {
			...state,
			character: action.character
		};
	default:
		return state;
	}
};

export default CharacterReducer;
