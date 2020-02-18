import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isMobile} from 'react-device-detect';
import randomColor from 'randomcolor';

import {takeFavoritesId} from '../utils/utils';
import {returnRowsArray} from '../utils/utils';
import {getEpisodesById} from '../redux/actions/episodes.action';
import {getCharactersById} from '../redux/actions/characters.action';

import Header from '../components/header';
import Footer from '../components/footer/footer';
import ParticlesBg from '../components/particles';
import EpisodesTable from '../components/episodes/episodes-table';
import TableSkeleton from '../components/skeletons/table-skeleton';
import CharactersTable from '../components/characters/characters-table';
import EpisodesTableForMobile from '../components/episodes/episodes-table-for-mobile';
import CharactersTableForMobile from '../components/characters/characters-table-for-mobile';

const Favorites = props => {
	const [clicked, setClicked] = useState(false);
	const color = randomColor({luminosity: 'dark'});
	const episodesId = takeFavoritesId('episodes');
	const charactersId = takeFavoritesId('characters');
	const {charactersReducer, history, getCharactersById, getEpisodesById, location, episodesReducer} = props;
	const isCharacter = location.pathname === '/favorite-characters';

	const haveLength = arrayEl => arrayEl && arrayEl.length;
	const isRequestAllowed = isCharacter ? haveLength(charactersId): haveLength(episodesId) || false;

	useEffect(() => {
		if (isRequestAllowed || clicked) {
			isCharacter ? getCharactersById(charactersId) : getEpisodesById(episodesId);
		}
	}, [clicked, isCharacter]);

	return <div className={'main'}>
		<Header transparent/>
		<div style={{height: 100}}>
			<div style={{position: 'relative', height: '45vh'}}>
				<ParticlesBg numbers={isMobile ? 60 : 100}/>
			</div>
		</div>
		{isCharacter ? charactersReducer.characters ?
			<>
				<div className={'paper'}>
					{
						!isMobile ?
							<CharactersTable setClicked={setClicked} clicked={clicked}
								rows={returnRowsArray(charactersReducer.characters)} history={history}/> :
							<CharactersTableForMobile setClicked={setClicked} clicked={clicked}
								rows={returnRowsArray(charactersReducer.characters)}
								history={history}/>
					}
				</div>
				<Footer color={'black'} hurtColor={color} fixed={!charactersReducer.characters || charactersReducer.characters.length < 5}/>
			</>
			: <TableSkeleton/> : episodesReducer.episodes ?
			<>
				<div className={'paper'}>
					{
						!isMobile ?
							<EpisodesTable setClicked={setClicked} clicked={clicked} main={false}
								rows={returnRowsArray(episodesReducer.episodes)} history={history}/> :
							<EpisodesTableForMobile setClicked={setClicked} clicked={clicked} main={false}
								rows={returnRowsArray(episodesReducer.episodes)} history={history}/>
					}
				</div>
				<Footer color={'black'} hurtColor={color} fixed={!episodesReducer.episodes || episodesReducer.episodes.length < 5}/>
			</>
			: <TableSkeleton/>
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
