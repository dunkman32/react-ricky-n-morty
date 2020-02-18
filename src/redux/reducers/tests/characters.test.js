import CharactersReducer from '../characters.reducer';
import {expect} from 'chai';

const infoAndResults = {
	'info': {
		'count': 394,
		'pages': 20,
		'next': 'https://rickandmortyapi.com/api/character/?page=2',
		'prev': ''
	},
	'results': [
		{'id': 1,
			'name': 'Rick Sanchez',
			'status': 'Alive',
			'species': 'Human',
			'type': '',
			'gender': 'Male',
			'origin': {
				'name': 'Earth',
				'url': 'https://rickandmortyapi.com/api/location/1'
			}
		}
	]
};
const charactersObjForIDS = [{
	'id': 1,
	'name': 'Rick Sanchez',
	'status': 'Alive',
	'species': 'Human',
	'type': '',
	'gender': 'Male',
}, {
	'id': 183,
	'name': 'Johnny Depp',
	'status': 'Alive',
	'species': 'Human',
	'type': '',
	'gender': 'Male',
}
];

describe('characters reducer', () => {
	it('should test reducer with undefined state', () => {
		expect(CharactersReducer(undefined, {}).characters).equal(null);
		expect(CharactersReducer(undefined, {}).info).equal(null);
		expect(CharactersReducer(undefined, {}).results).equal(null);
	});

	it('should test reducer with defined state action = GET_CHARACTERS_BY_ID', () => {
	    const getCharactersById = CharactersReducer({}, {type: 'GET_CHARACTERS_BY_ID', ...charactersObjForIDS});
		expect(getCharactersById).equal(getCharactersById);
	});

	it('should test reducer with defined state action = GET_CHARACTERS ', () => {
	    const reducerGetCharacters = CharactersReducer({}, {
			type: 'GET_CHARACTERS',
			...infoAndResults,
		});
		expect(reducerGetCharacters.info).equal(infoAndResults.info);
		expect(reducerGetCharacters.results).equal(infoAndResults.results);
	});
});
