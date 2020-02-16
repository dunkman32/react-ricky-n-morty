import axios from 'axios';

const readCharacter = (url) => axios.get(url);

export {
	readCharacter,
};
