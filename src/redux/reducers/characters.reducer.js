const defaultState = {
	characters: null
};

const CharactersReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_CHARACTERS_BY_ID':
		return {
			...state,
			characters: action.characters,
		};
	case 'GET_CHARACTERS':
		return {
			...state,
			info: action.info,
			results: action.results,
		};
	default:
		return state;
	}
};

export default CharactersReducer;
