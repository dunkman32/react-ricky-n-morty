import React, {useEffect, useState} from 'react';
import {Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isMobile} from 'react-device-detect';
import randomColor from 'randomcolor';

import Loading from '../components/loading/loading';
import CharactersTable from '../components/characters-table';
import {takeFavoritesId} from '../utils/utils';
import {getCharactersById} from '../redux/actions/characters.action';
import TableSkeleton from '../components/skeletons/table-skeleton';
import Footer from '../components/footer';
import ParticlesBg from '../components/particles';

const FavoriteCharacters = props => {
	const color = randomColor({luminosity: 'dark'});
	const {charactersReducer, history, getCharactersById} = props;
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		getCharactersById(takeFavoritesId('characters'));
	}, [clicked]);
	
	return <div className={'main'}>
		<div style={{height: 75}}>
			<div style={{position: 'relative', height: '45vh'}}>
				<ParticlesBg numbers={isMobile? 60: 100}/>
			</div>

		</div>
		{charactersReducer.characters  ?
			<Paper className={'paper'}>
				<CharactersTable setClicked={setClicked} clicked={clicked} rows={charactersReducer.characters} history={history}/>
			</Paper>
			: <>
				<TableSkeleton/>
				<Loading/>
			</>}
		<Footer color={'black'} hurtColor={color} fixed={!charactersReducer.characters}/>
	</div>;
};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer
});

const mapDispatchToProps = dispatch => ({
	getCharactersById: ids => {
		dispatch(getCharactersById(ids));
	},
});

FavoriteCharacters.propTypes = {
	getCharactersById: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	charactersReducer: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCharacters);
