import axios from 'axios';

import NotificationHandler, {
	NOTIFICATION_ERROR,
} from './notification.action';

const getEpisodes = (page) => {
	let url = 'https://rickandmortyapi.com/api/episode';
	if (page) url = `https://rickandmortyapi.com/api/episode?page=${page}`;
	return dispatch => {
		axios.get(url).then(res => {
			const {info, results} = res.data;
			dispatch({
				type: 'GET_EPISODES',
				info,
				results,
			});
		}).catch(e => {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		});
	};
};

export {
	getEpisodes
};
