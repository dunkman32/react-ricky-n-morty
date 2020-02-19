import axios from 'axios';

const readEpisode = id => axios.get(id);

export {
	readEpisode,
};
