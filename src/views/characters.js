import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {Paper} from '@material-ui/core';

import {getCharacters} from '../redux/actions/characters.action';

import CharactersTable from '../components/characters-table';
import Loading from '../components/loading/loading';
import Footer from '../components/footer';
import TableSkeleton from '../components/skeletons/table-skeleton';

import './characters.css';

const Characters = props => {
	const {charactersReducer, history, getCharacters} = props;
	const color = randomColor({luminosity: 'dark'});

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div className={'characters-bg'}>
			<>
				{charactersReducer.results ?
					<Paper style={{
						width: '80%',
						margin: '0 auto'
					}}>
						<CharactersTable info={charactersReducer.info} rows={charactersReducer.results} history={history}/>
					</Paper>
					: <>
						<TableSkeleton/>
						<Loading/>
					</>}
			</>
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
