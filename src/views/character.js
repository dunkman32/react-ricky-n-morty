import React, {useEffect} from 'react';
import './styles/character.css';
import SingleCharacterPageHeader from '../components/character/single-character-page-header';
import SingleCharacterEpisodeTable from '../components/character/single-character-episode-table';
import {getCharacter} from '../redux/actions/character.action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/loading/loading';

const Character = (props) => {

	const {history, characterReducer, match, getCharacter} = props;
	const {id} = match.params;

	useEffect(() => {
		getCharacter(id);
	}, [id]);

	return (
		<div>
			{characterReducer.character ? <>
				<SingleCharacterPageHeader data={characterReducer.character}/>
				<SingleCharacterEpisodeTable history={history}/>
			</>: <Loading/>}
		</div>
	);
};

const mapStateToProps = state => ({
	characterReducer: state.characterReducer
});

const mapDispatchToProps = dispatch => ({
	getCharacter: (id) => {
		dispatch(getCharacter(id));
	},
});


Character.propTypes = {
	characterReducer: PropTypes.object.isRequired,
	getCharacter: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
