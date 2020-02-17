import {readEpisodes} from '../service/episodes.service';

import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';
import {readCharactersById} from '../service/characters.service';

const getEpisodes = page => {

	let url = 'https://rickandmortyapi.com/api/episode';
	if (page) url = `https://rickandmortyapi.com/api/episode?page=${page}`;
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			const res = await readEpisodes(url);
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
		const response = await readCharactersById(`https://rickandmortyapi.com/api/episode/${ids.join(',')}`);
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
