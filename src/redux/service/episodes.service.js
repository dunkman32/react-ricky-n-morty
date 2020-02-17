import axios from 'axios';

const readEpisodes = (url, params) => axios.get(url, {
	params
});

export {
	readEpisodes,
};
