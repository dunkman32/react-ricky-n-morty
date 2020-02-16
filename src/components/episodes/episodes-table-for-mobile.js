import React from 'react';
import PropTypes from 'prop-types';
import EpisodeCardForMobile from './episode-card-for-mobile';

const EpisodesTableForMobile = props => {
	const {rows, history} = props;
	return (
		<div>
			{
				rows && rows.map(row => <div key={row.id}>
					<EpisodeCardForMobile history={history} row={row}/>
				</div>)
			}
		</div>
	);
};

EpisodesTableForMobile.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
};

export default EpisodesTableForMobile;
