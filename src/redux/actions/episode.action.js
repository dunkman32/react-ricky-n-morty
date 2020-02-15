import axios from 'axios';

import NotificationHandler, {
	NOTIFICATION_ERROR,
} from './notification.action';

const getEpisode = (id) => {
	return dispatch => {
		axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then(res => {
			const episode = res.data;
			dispatch({
				type: 'GET_EPISODE',
				episode
			});
		}).catch(e => {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		});
	};
};

export {
	getEpisode
};
