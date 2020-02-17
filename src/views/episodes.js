import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {Paper} from '@material-ui/core';
import {isMobile} from 'react-device-detect';
//methods
import {getEpisodes} from '../redux/actions/episodes.action';
//components
import Loading from '../components/loading/loading';
import Footer from '../components/footer';
import EpisodesTable from '../components/episodes/episodes-table';
import TableSkeleton from '../components/skeletons/table-skeleton';
//css
import './styles/episodes.css';
import './styles/sheared.css';
import EpisodesTableForMobile from '../components/episodes/episodes-table-for-mobile';

const Episodes = props => {
	const {history, episodesReducer} = props;
	const color = randomColor({luminosity: 'dark'});

	useEffect(() => {
		props.getEpisodes();
	}, []);

	return (
		<div className='main'>
			<div style={{height: 75}}>
				<div className="background"/>
			</div>
			<>
				{episodesReducer.results ?
					<Paper className={'paper'}>
						{
							!isMobile ? <EpisodesTable rows={episodesReducer.results} history={history}/> :
								<EpisodesTableForMobile rows={episodesReducer.results} history={history}/>
						}
					</Paper>
					: <>
						<TableSkeleton/>
						<Loading/>
					</>}
			</>
			<Footer color={'black'} hurtColor={color} fixed={!episodesReducer.results}/>
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
