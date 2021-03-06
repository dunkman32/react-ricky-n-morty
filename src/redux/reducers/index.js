import {combineReducers} from 'redux';

import CharactersReducer from './characters.reducer';
import CharacterReducer from './character.reducer';
import EpisodeReducer from './episode.reducer';
import EpisodesReducer from './episodes.reducer';
import NotificationReducer from './notification.reducer';
import LoadingReducer from './loading.reducer';
import ClickedFavoritesReducer from './clicked-favorites.reducer';

const allReducers = combineReducers({
	charactersReducer: CharactersReducer,
	characterReducer: CharacterReducer,
	episodeReducer: EpisodeReducer,
	episodesReducer: EpisodesReducer,
	notificationReducer: NotificationReducer,
	loadingReducer: LoadingReducer,
	clickedFavoritesReducer: ClickedFavoritesReducer,
});

export default allReducers;
