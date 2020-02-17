import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {Paper} from '@material-ui/core';
import {isMobile} from	'react-device-detect';

import {getCharacters} from '../redux/actions/characters.action';

import CharactersTable from '../components/characters/characters-table';
import Loading from '../components/loading/loading';
import Footer from '../components/footer';
import TableSkeleton from '../components/skeletons/table-skeleton';

import './styles/characters.css';
import './styles/sheared.css';
import CharactersTableForMobile from '../components/characters/characters-table-for-mobile';

const Characters = props => {
	const {charactersReducer, history, getCharacters} = props;
	const color = randomColor({luminosity: 'dark'});

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div className={'main'}>
			<div style={{height: 75}}>
				<div className="background"/>
			</div>
			
			{charactersReducer.results ?
				<div className={'paper'}>
					{!isMobile ?
						<CharactersTable info={charactersReducer.info} rows={charactersReducer.results} history={history}/> :
						<CharactersTableForMobile rows={charactersReducer.results} history={history}/>
					}
				</div>
				: <>
					<TableSkeleton/>
					<Loading/>
				</>}

			<Footer color={'black'} hurtColor={color} fixed={!charactersReducer.results}/>
		</div>
	);
};
const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer
});

const mapDispatchToProps = dispatch => ({
	getCharacters: page => {
		dispatch(getCharacters(page));
	},
});

Characters.propTypes = {
	getCharacters: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	charactersReducer: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
