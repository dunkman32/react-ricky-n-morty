import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {Paper} from '@material-ui/core';
//methods
import {getEpisodes} from '../redux/actions/episodes.action';
//components
import Loading from '../components/loading/loading';
import Footer from '../components/footer';
import EpisodesTable from '../components/episodes-table';
import TableSkeleton from '../components/skeletons/table-skeleton';
//css
import './episodes.css';

const Episodes = props => {
	const {history, episodesReducer} = props;
	const color = randomColor({luminosity: 'dark'});

	useEffect(() => {
		props.getEpisodes();
	}, []);

	return (
		<div className='background'>
			<div style={{height: 50}}></div>
			<>
				{episodesReducer.results ?
					<Paper style={{
						width: '80%',
						margin: '0 auto'
					}}>
						<EpisodesTable rows={episodesReducer.results} history={history}/>
					</Paper>
					: <>
						<TableSkeleton/> 
						<Loading/>
					</>}
			</>
			<Footer color={'white'} hurtColor={color} fixed={!episodesReducer.results}/>
		</div>
	);
};


const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer
});

const mapDispatchToProps = (dispatch) => ({
	getEpisodes: (page) => {
		dispatch(getEpisodes(page));
	},
});

Episodes.propTypes = {
	getEpisodes: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	episodesReducer: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
