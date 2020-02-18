import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isMobile} from 'react-device-detect';

import EpisodesTable from '../episodes/episodes-table';
import {getEpisodesById} from '../../redux/actions/episodes.action';
import EpisodesTableForMobile from '../episodes/episodes-table-for-mobile';
import {returnRowsArray} from '../../utils/utils';

import Css from './cheared.module.css';

const SingleCharacterEpisodeTable = props => {
	const {history, getEpisodesById, episodesReducer, characterReducer} = props;
	const {episodes} = episodesReducer;
	const {character} = characterReducer;
	const takeEpisodesId = (episodes) => episodes.map(episode => episode.split('episode/')[1]);

	useEffect(() => {
		getEpisodesById(takeEpisodesId(character.episode));
	}, []);

	return (
		<div className={Css.table}>
			{episodes && (!isMobile? <EpisodesTable history={history} rows={returnRowsArray(episodes)}/>:
				<EpisodesTableForMobile history={history} rows={returnRowsArray(episodes)}/>
			)}
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
