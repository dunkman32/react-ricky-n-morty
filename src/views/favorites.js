import React, {useEffect} from 'react';
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
import EmptyFavoritesInfo from '../components/empty-favorites-info';

const Favorites = props => {
	const color = randomColor({luminosity: 'dark'});
	const episodesId = takeFavoritesId('episodes');
	const charactersId = takeFavoritesId('characters');
	const {charactersReducer, history, getCharactersById, getEpisodesById, location, episodesReducer, clickedFavoritesReducer} = props;
	const isCharacter = location.pathname === '/favorite-characters';

	const haveLength = arrayEl => arrayEl && arrayEl.length;
	const isRequestAllowed = isCharacter ? haveLength(charactersId) : haveLength(episodesId) || false;

	useEffect(() => {
		if (isRequestAllowed || clickedFavoritesReducer.clicked) {
			isCharacter ? getCharactersById(charactersId) : getEpisodesById(episodesId);
		}
	}, [clickedFavoritesReducer.clicked, isCharacter]);

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
						charactersReducer.characters.length ?
							!isMobile ?
								<CharactersTable rows={returnRowsArray(charactersReducer.characters)}
									history={history}/> :
								<CharactersTableForMobile rows={returnRowsArray(charactersReducer.characters)}
									history={history}/>
							: <EmptyFavoritesInfo link={location.pathname}
								text={'there is no any favorite character, you should marked some characters as favorites'}/>

					}
				</div>
				<Footer color={'black'} hurtColor={color}
					fixed={!charactersReducer.characters || charactersReducer.characters.length < 5}/>
			</>
			: <TableSkeleton/> : episodesReducer.episodes ?
			<>
				<div className={'paper'}>
					{episodesReducer.episodes.length ?
						!isMobile ?
							<EpisodesTable main={false} rows={returnRowsArray(episodesReducer.episodes)}
								history={history}/> :
							<EpisodesTableForMobile main={false} rows={returnRowsArray(episodesReducer.episodes)}
								history={history}/>
						: <EmptyFavoritesInfo link={location.pathname}
							text={'there is no any favorite episode, you should marked some episodes as favorites'}/>
					}
				</div>
				<Footer color={'black'} hurtColor={color}
					fixed={!episodesReducer.episodes || episodesReducer.episodes.length < 5}/>
			</>
			: <TableSkeleton/>
		}
	</div>;
};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer,
	episodesReducer: state.episodesReducer,
	clickedFavoritesReducer: state.clickedFavoritesReducer
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
	episodesReducer: PropTypes.object,
	clickedFavoritesReducer: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
