import {readCharactersById, readCharacters} from '../service/characters.service';

import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';

const getCharactersById = ids => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const response = await readCharactersById(`https://rickandmortyapi.com/api/character/${ids.join(',')}`);
		if (response.data) {
			const characters = response.data;
			dispatch({
				type: 'GET_CHARACTERS_BY_ID',
				characters
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	} finally {
		dispatch(toggleLoading(false));
	}
};


const getCharacters = params => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const response = await readCharacters('https://rickandmortyapi.com/api/character', params);
		if (response.data) {
			const {results, info} = response.data;
			dispatch({
				type: 'GET_CHARACTERS',
				results,
				info
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	} finally {
		dispatch(toggleLoading(false));
	}
};

export {
	getCharactersById,
	getCharacters,
};
