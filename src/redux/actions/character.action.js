import {readCharacter} from '../service/character.service';

import NotificationHandler, {
	NOTIFICATION_ERROR,
} from './notification.action';

const getCharacter = id => async dispatch => {
	try {
		const res = await readCharacter(`https://rickandmortyapi.com/api/character/${id}`);
		if (res.data) {
			const episode = res.data;
			dispatch({
				type: 'GET_CHARACTER',
				episode
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	}
};

export {
	getCharacter
};
