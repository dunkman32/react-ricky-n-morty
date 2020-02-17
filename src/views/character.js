import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import SingleCharacterPageHeader from '../components/character/single-character-page-header';
import SingleCharacterEpisodeTable from '../components/character/single-character-episode-table';
import IntegrationFbComments from '../components/integration-fb-comments';
import SingleCharacterSkeleton from '../components/skeletons/single-character-skeleton';
import {getCharacter} from '../redux/actions/character.action';

import './styles/character.css';
import './styles/episode.css';
import './styles/sheared.css';

const Character = (props) => {

	const {history, characterReducer, match, getCharacter} = props;
	const {id} = match.params;

	useEffect(() => {
		getCharacter(id);
	}, []);

	return (
		<div className={'main'}>
			{characterReducer.character ? <>
				<SingleCharacterPageHeader data={characterReducer.character}/>
				<Divider/>
				<SingleCharacterEpisodeTable history={history}/>
			</> : <>
				<SingleCharacterSkeleton/>
			</>}
			<div style={{marginTop: '58vh'}}>
				<IntegrationFbComments/>
			</div>
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
