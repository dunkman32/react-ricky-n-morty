import {readCharacter} from '../service/character.service';
import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';

const getCharacter = id => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const res = await readCharacter(id);
		if (res.data) {
			const character = res.data;
			dispatch({
				type: 'GET_CHARACTER',
				character
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	}finally {
		dispatch(toggleLoading(false));
	}
};

export {
	getCharacter
};
