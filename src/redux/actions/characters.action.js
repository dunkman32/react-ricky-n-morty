import axios from 'axios';

import NotificationHandler, {
	NOTIFICATION_ERROR,
} from './notification.action';

const getCharactersById = (ids) => {
	return dispatch => {
		axios.get(`https://rickandmortyapi.com/api/character/${ids.join(',')}`).then(res => {
			const characters = res.data;
			dispatch({
				type: 'GET_CHARACTERS_BY_ID',
				characters
			});
		}).catch(e => {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		});
	};
};

const getCharacters = (page) => {
	return dispatch => {
		axios.get(`https://rickandmortyapi.com/api/character/${page}`).then(res => {
			const characters = res.data;
			dispatch({
				type: 'GET_CHARACTERS',
				characters
			});
		}).catch(e => {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		});
	};
};



export {
	getCharactersById,
	getCharacters,
};
