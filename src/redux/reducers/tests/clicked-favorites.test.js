import {expect} from 'chai';
import ClickedFavoritesReducer from '../clicked-favorites.reducer';

const defaultActions = {
	show: false
};

describe('clickedFavorites reducer', () => {

	it('should test reducer with undefined state', () => {
		expect(ClickedFavoritesReducer(undefined, defaultActions).clicked).equal(false);
	});

	it('should test reducer with defined state', () => {
		expect(ClickedFavoritesReducer({}, {type: 'TOGGLE',clicked: true}).clicked).equal(true);
		expect(ClickedFavoritesReducer({}, {type: 'TOGGLE',clicked: false}).clicked).equal(false);
	});

});
