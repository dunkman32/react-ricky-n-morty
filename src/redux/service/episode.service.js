import axios from 'axios';

const readEpisode = (url) => axios.get(url);

export {
	readEpisode,
};
