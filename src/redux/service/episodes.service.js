import axios from 'axios';

const readEpisodes =  params => axios.get('/api/episode', {
	params
});

const readEpisodesById = ids => axios.get(`/api/episode/${ids.join(',')}`);


export {
	readEpisodes,
	readEpisodesById
};
