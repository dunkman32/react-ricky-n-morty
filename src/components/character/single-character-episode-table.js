import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EpisodesTable from '../episodes/episodes-table';
import Loading from '../loading/loading';
import {getEpisodesById} from '../../redux/actions/episodes.action';

import Css from './cheared.module.css';

const SingleCharacterEpisodeTable = props => {
	const {history, getEpisodesById, episodesReducer, characterReducer} = props;
	const {episodes} = episodesReducer;
	const {character} = characterReducer;
	console.log(props);
	const takeEpisodesId = (episodes) => episodes.map(episode => episode.split('episode/')[1]);

	useEffect(() => {
		console.log(takeEpisodesId(character.episode), '123');
		getEpisodesById(takeEpisodesId(character.episode));
	});

	const returnEpisodesArray = episodes => (episodes instanceof Array) ? episodes : [episodes];

	return (
		<div className={Css.table}>
			{episodes ? <EpisodesTable history={history} rows={returnEpisodesArray(episodes)}/> : <Loading/>}
		</div>
	);
};

const mapStateToProps = state => ({
	characterReducer: state.characterReducer,
	episodesReducer: state.episodesReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getEpisodesById: (ids) => {
		dispatch(getEpisodesById(ids));
	},
});

SingleCharacterEpisodeTable.propTypes = {
	history: PropTypes.object.isRequired,
	characterReducer: PropTypes.object.isRequired,
	getEpisodesById: PropTypes.func.isRequired,
	episodesReducer: PropTypes.object.isRequired,
	// rows: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleCharacterEpisodeTable);
