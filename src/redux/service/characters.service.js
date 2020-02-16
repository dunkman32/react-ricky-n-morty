import axios from 'axios';

const readCharactersById = (url) => axios.get(url);

const readCharacters= (url) => axios.get(url);

export {
	readCharactersById,
	readCharacters,
};
