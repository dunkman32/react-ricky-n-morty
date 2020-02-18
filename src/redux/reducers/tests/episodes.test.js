import EpisodesReducer from '../episodes.reducer';
import {expect} from 'chai';

const defaultActions = {
	info: null,
	results: null,
	episodes: null
};
const infoAndResults = {
	'info': {
		'count': 31,
		'pages': 2,
		'next': 'https://rickandmortyapi.com/api/episode?page=2',
		'prev': ''
	},
	'results': [{
		'id': 1,
		'name': 'Pilot',
		'air_date': 'December 2, 2013',
		'episode': 'S01E01',
	}]
};
const episodes = [
	{
		'id': 10,
		'name': 'Close Rick-counters of the Rick Kind',
		'air_date': 'April 7, 2014',
		'episode': 'S01E10',
		'created': '2017-11-10T12:56:34.747Z'
	},
	{
		'id': 28,
		'name': 'The Ricklantis Mixup',
		'air_date': 'September 10, 2017',
		'episode': 'S03E07',
		'created': '2017-11-10T12:56:36.618Z'
	}
];

describe('episodes reducer', () => {
	it('should test reducer with undefined state', () => {
		expect(EpisodesReducer(undefined, defaultActions).results).equal(null);
		expect(EpisodesReducer(undefined, defaultActions).info).equal(null);
		expect(EpisodesReducer(undefined, defaultActions).episodes).equal(null);
	});

	it('should test reducer with defined state action = GET_EPISODES_BY_ID', () => {
		const getEpidodesById = EpisodesReducer({}, {type: 'GET_EPISODES_BY_ID', episodes});
		expect(getEpidodesById.episodes).equal(episodes);
	});

	it('should test reducer with defined state action = GET_EPISODES ', () => {
		const reducerGetEpisodes = EpisodesReducer({}, {
			type: 'GET_EPISODES',
			...infoAndResults,
		});
		expect(reducerGetEpisodes.info).equal(infoAndResults.info);
		expect(reducerGetEpisodes.results).equal(infoAndResults.results);
	});
});
