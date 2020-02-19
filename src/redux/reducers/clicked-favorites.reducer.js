const defaultState = {
	clicked: false,
};

const ClickedFavoritesReducer = (state = defaultState, action) => {
	if (action.type === 'TOGGLE') {
		return {
			type: action.type,
			clicked: action.clicked
		};
	}
	return state;
};

export default ClickedFavoritesReducer;
