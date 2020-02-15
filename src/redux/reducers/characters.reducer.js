const defaultState = {
	characters: null
};

const CharactersReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_CHARACTERS_BY_ID':
		return {
			...state,
			characters: action.characters
		};
	default:
		return state;
	}
};

export default CharactersReducer;
