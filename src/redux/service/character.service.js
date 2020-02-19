import axios from 'axios';

const readCharacter = (id) => axios.get(`/api/character/${id}`);

export {
	readCharacter,
};
