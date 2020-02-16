import axios from 'axios';

const readEpisodes = (url) => axios.get(url);

export {
	readEpisodes,
};
