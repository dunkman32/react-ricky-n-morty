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
import {getEpisodesById} from '../redux/actions/episodes.action';
import EpisodesTable from '../components/episodes/episodes-table';
import EpisodesTableForMobile from '../components/episodes/episodes-table-for-mobile';
import CharactersTableForMobile from '../components/characters/characters-table-for-mobile';

const Favorites = props => {
	const color = randomColor({luminosity: 'dark'});
	const {charactersReducer, history, getCharactersById, getEpisodesById, location, episodesReducer} = props;
	const [clicked, setClicked] = useState(false);
	const isCharacter = location.pathname === '/favorite-characters';

	useEffect(() => {
		isCharacter ? getCharactersById(takeFavoritesId('characters')) : getEpisodesById(takeFavoritesId('episodes'));
	}, [clicked, isCharacter]);

	return <div className={'main'}>
		<div style={{height: 75}}>
			<div style={{position: 'relative', height: '45vh'}}>
				<ParticlesBg numbers={isMobile ? 60 : 100}/>
			</div>

		</div>
		{isCharacter ? charactersReducer.characters ?
			<><div className={'paper'}>
				{!isMobile? <CharactersTable setClicked={setClicked} clicked={clicked} rows={charactersReducer.characters}
					history={history}/>:
					<CharactersTableForMobile setClicked={setClicked} clicked={clicked} rows={charactersReducer.characters} history={history}/>
				}
			</div>
			<Footer color={'black'} hurtColor={color} fixed={!charactersReducer.characters}/>
			</>
			: <>
				<TableSkeleton/>
				<Loading/>
			</> : episodesReducer.episodes ?
			<><div className={'paper'}>
				{
					!isMobile ? <EpisodesTable setClicked={setClicked} clicked={clicked} rows={episodesReducer.episodes} history={history}/> :
						<EpisodesTableForMobile setClicked={setClicked} clicked={clicked} rows={episodesReducer.episodes} history={history}/>
				}
			</div>
			<Footer color={'black'} hurtColor={color} fixed={!episodesReducer.episodes}/>
			</>
			: <>
				<TableSkeleton/>
				<Loading/>
			</>
		}
	</div>;
};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer,
	episodesReducer: state.episodesReducer
});

const mapDispatchToProps = dispatch => ({
	getCharactersById: ids => {
		dispatch(getCharactersById(ids));
	},
	getEpisodesById: ids => {
		dispatch(getEpisodesById(ids));
	},
});

Favorites.propTypes = {
	getCharactersById: PropTypes.func.isRequired,
	getEpisodesById: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	charactersReducer: PropTypes.object,
	episodesReducer: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
