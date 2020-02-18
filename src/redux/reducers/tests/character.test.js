import CharacterReducer from '../character.reducer';
import {expect} from 'chai';

const characterObj = {
	'id': 1,
	'name': 'Rick Sanchez',
	'status': 'Alive',
	'species': 'Human',
	'type': '',
	'gender': 'Male',
};

describe('character reducer', () => {
	it('should test reducer with undefined state', () => {
		expect(CharacterReducer(undefined, {}).character).equal(null);
	});

	it('should test reducer with defined state', () => {
		expect(CharacterReducer({}, {type: 'GET_CHARACTER',...characterObj}).gender).equal(characterObj.gender);
	});
});
