import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import EpisodeCardForMobile from './episode-card-for-mobile';
import {getEpisodes} from '../../redux/actions/episodes.action';
import FilterTable from '../filter';


const EpisodesTableForMobile = props => {
	const {rows, history, setClicked, clicked, episodesReducer, main, getEpisodes} = props;
	const [page, setPage] = React.useState(0);
	const data = main ? episodesReducer.results : rows;
	useEffect(() => {
		if (main) getEpisodes({page: page + 1});
	}, [page]);

	return (
		<div>
			{
				data && <>
					<FilterTable isEpisode/>
					{
						data.map(row => <div key={row.id}>
							<EpisodeCardForMobile clicked={clicked} setClicked={setClicked} history={history}
								row={row}/>
						</div>)
					}
					{
						(main && episodesReducer.info) && <>{
							page !== 0 &&
                            <Button onClick={() => setPage(page - 1)}>prev</Button>
						}{' '}{
							episodesReducer.info.pages !== page + 1  &&
                            <Button onClick={() => setPage(page + 1)}>next</Button>
						}</>
					}
				</>
			}
		</div>
	);
};

EpisodesTableForMobile.propTypes = {
	rows: PropTypes.array,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool,
	getEpisodes: PropTypes.func.isRequired,
	episodesReducer: PropTypes.object.isRequired,
	main: PropTypes.bool
};

const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer
});

const mapDispatchToProps = dispatch => ({
	getEpisodes: params => {
		dispatch(getEpisodes(params));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesTableForMobile);
