import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {isMobile} from 'react-device-detect';

import CharactersTable from '../components/characters/characters-table';
import Footer from '../components/footer';

import './styles/characters.css';
import './styles/sheared.css';
import CharactersTableForMobile from '../components/characters/characters-table-for-mobile';

const Characters = props => {
	const {charactersReducer, history} = props;
	const color = randomColor({luminosity: 'dark'});

	return (
		<div className={'main'}>
			<div style={{height: 75}}>
				<div className="background"/>
			</div>
			<div className={'paper'}>
				{!isMobile ?
					<CharactersTable main info={charactersReducer.info} history={history}/> :
					<CharactersTableForMobile main history={history}/>
				}
			</div>
			<Footer color={'black'} hurtColor={color} fixed={!charactersReducer.results}/>
		</div>
	);
};
const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer
});

Characters.propTypes = {
	charactersReducer: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Characters);
