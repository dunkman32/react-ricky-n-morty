import {readEpisode} from '../service/episode.service';

import NotificationHandler, {
	NOTIFICATION_ERROR,
} from './notification.action';

const getEpisode = id => async dispatch => {
	try {
		const res = await readEpisode(`https://rickandmortyapi.com/api/episode/${id}`);
		if (res.data) {
			const episode = res.data;
			dispatch({
				type: 'GET_EPISODE',
				episode
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	}
};

export {
	getEpisode
};
