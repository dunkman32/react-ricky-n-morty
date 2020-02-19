import {readEpisodes, readEpisodesById} from '../service/episodes.service';
import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';

const getEpisodes = params => {
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			const res = await readEpisodes(params);
			if (res.data) {
				const {info, results} = res.data;
				dispatch({
					type: 'GET_EPISODES',
					info,
					results,
				});
			}
		}catch (e) {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		}finally {
			dispatch(toggleLoading(false));
		}
	};
};


const getEpisodesById = ids => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const response = await readEpisodesById(ids);
		if (response.data) {
			const episodes = response.data;
			dispatch({
				type: 'GET_EPISODES_BY_ID',
				episodes
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	}finally {
		dispatch(toggleLoading(false));
	}
};

export {
	getEpisodes,
	getEpisodesById
};
