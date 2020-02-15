import {combineReducers} from 'redux';
import CharactersReducer from './characters.reducer';
import EpisodeReducer from './episode.reducer';
import EpisodesReducer from './episodes.reducer';
import NotificationReducer from './notification.reducer';

const allReducers = combineReducers({
	charactersReducer: CharactersReducer,
	episodeReducer: EpisodeReducer,
	episodesReducer: EpisodesReducer,
	notificationReducer: NotificationReducer
});

export default allReducers;
