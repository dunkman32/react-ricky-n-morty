import EpisodeReducer from '../episode.reducer';
import {expect} from 'chai';

const episodeObj = {
	'id': 1,
	'name': 'Pilot',
	'air_date': 'December 2, 2013',
	'episode': 'S01E01',
};

describe('character reducer', () => {

	it('should test reducer with undefined state', () => {
		expect(EpisodeReducer(undefined, {
		    episode: null
        }).episode).equal(null);
	});

	it('should test reducer with defined state', () => {
		expect(EpisodeReducer({}, {type: 'GET_EPISODE',...episodeObj}).gender).equal(episodeObj.gender);
	});

});
