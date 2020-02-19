import axios from 'axios';

const readCharactersById = (ids) => axios.get(`/api/character/${ids.join(',')}`);

const readCharacters = params => axios.get('/api/character', {params});

export {
	readCharactersById,
	readCharacters,
};
