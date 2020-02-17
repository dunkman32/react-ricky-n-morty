import React from 'react';
import PropTypes from 'prop-types';

import EpisodeCardForMobile from './episode-card-for-mobile';

const EpisodesTableForMobile = props => {
	const {rows, history, setClicked, clicked} = props;
	return (
		<div>
			{
				rows && rows.map(row => <div key={row.id}>
					<EpisodeCardForMobile clicked={clicked} setClicked={setClicked} history={history} row={row}/>
				</div>)
			}
		</div>
	);
};

EpisodesTableForMobile.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool
};

export default EpisodesTableForMobile;
