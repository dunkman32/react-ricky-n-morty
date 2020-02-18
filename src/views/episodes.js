import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {isMobile} from 'react-device-detect';
//methods
//components
import Footer from '../components/footer/footer';
import EpisodesTable from '../components/episodes/episodes-table';
import Header from '../components/header';
//css
import './styles/episodes.css';
import './styles/sheared.css';
import EpisodesTableForMobile from '../components/episodes/episodes-table-for-mobile';

const Episodes = props => {
	const {history, episodesReducer} = props;
	const color = randomColor({luminosity: 'dark'});

	return (
		<div className='main'>
			<Header transparent/>
			<div style={{height: 100}}>
				<div className="background"/>
			</div>
			<>
				<div className={'paper'}>
					{
						!isMobile ? <EpisodesTable showFilterIcon main history={history}/> :
							<EpisodesTableForMobile showFilterIcon main history={history}/>
					}
				</div>
			</>
			<Footer color={'black'} hurtColor={color} fixed={!episodesReducer.results}/>
		</div>
	);
};


const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer
});

Episodes.propTypes = {
	history: PropTypes.object.isRequired,
	episodesReducer: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Episodes);
