import {readEpisode} from '../service/episode.service';
import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';

const getEpisode = id => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const res = await readEpisode(`/api/episode/${id}`);
		if (res.data) {
			const episode = res.data;
			dispatch({
				type: 'GET_EPISODE',
				episode
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	} finally {
		dispatch(toggleLoading(false));
	}
};

export {
	getEpisode
};
