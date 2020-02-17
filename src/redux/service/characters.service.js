import axios from 'axios';

const readCharactersById = (url) => axios.get(url);

const readCharacters= (url, params) => axios.get(url, {params});

export {
	readCharactersById,
	readCharacters,
};
