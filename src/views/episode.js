import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import SingleEpisodeCharactersList from '../components/single-episode-characters-list';
import SingleEpisodeKeysList from '../components/single-episode-keys-list';
import {getEpisode} from '../redux/actions/episode.action';
import IntegrationFbComments from '../components/integration-fb-comments';
import SingleEpisodeSkeleton from '../components/skeletons/single-episode-skeleton';
import Header from '../components/header';

import './styles/episode.css';
import './styles/sheared.css';

const Episode = (props) => {
	const {episodeReducer, match, history} = props;
	const {id} = match.params;

	useEffect(() => {
		props.getEpisode(id);
	}, []);

	return (
		<div className='main'>
			<Header/>
			<div style={{height: 75}}/>
			{episodeReducer.episode ?
				<Paper className={'paper'}>
					<SingleEpisodeKeysList id={parseInt(id)}/>
					<Divider/>
					<SingleEpisodeCharactersList history={history}/>
				</Paper> : <>
					<SingleEpisodeSkeleton/>
				</>}
			<IntegrationFbComments/>
		</div>
	);
};

Episode.propTypes = {
	episodeReducer: PropTypes.object.isRequired,
	getEpisode: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
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
