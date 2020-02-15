import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import SingleEpisodeKeysList from '../components/single-episode-keys-list';
import {getEpisode} from '../redux/actions/episode.action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/loading/loading';
import SingleEpisodeCharactersList from '../components/single-episode-characters-list';
import './episode.css';
import Divider from '@material-ui/core/Divider';
import IntegrationFbComments from '../components/integration-fb-comments';

const Episode = (props) => {
	const {episodeReducer, match} = props;
	const {id} = match.params;

	useEffect(() => {
		props.getEpisode(id);
	}, [id]);

	return (
		<div className='background-episode'>
			{episodeReducer.episode ?
				<Paper style={{width: '80%', margin: '0 auto', position: 'relative'}}>
					<SingleEpisodeKeysList id={parseInt(id)}/>
					<Divider/>
					<SingleEpisodeCharactersList/>
				</Paper> :
				<Loading/>}
			<IntegrationFbComments/>
		</div>
	);
};

Episode.propTypes = {
	episodeReducer: PropTypes.object.isRequired,
	getEpisode: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	episodeReducer: state.episodeReducer
});

const mapDispatchToProps = (dispatch) => ({
	getEpisode: (id) => {
		dispatch(getEpisode(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
