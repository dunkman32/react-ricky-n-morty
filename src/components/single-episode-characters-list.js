import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SingleCharacter from './single-character';
import {getCharactersById} from '../redux/actions/characters.action';

const SingleEpisodeCharactersList = (props) => {
	const {episode} = props.episodeReducer;
	const {characters} = props.charactersReducer;

	const takeCharactersId = (chars) => chars.map(character => character.split('character/')[1]);

	useEffect(() => {
		props.getCharactersById(takeCharactersId(episode.characters));
	}, []);

	return episode && <div>
		<div style={{width: '100% !important'}}>{characters && characters.map(character => <SingleCharacter
			key={character.id} character={character}/>)}</div>
	</div>;
};

SingleEpisodeCharactersList.propTypes = {
	episodeReducer: PropTypes.object.isRequired,
	charactersReducer: PropTypes.object.isRequired,
	getCharactersById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer,
	episodeReducer: state.episodeReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getCharactersById: (ids) => {
		dispatch(getCharactersById(ids));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEpisodeCharactersList);
