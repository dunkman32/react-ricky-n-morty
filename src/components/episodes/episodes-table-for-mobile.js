import React, {useState} from 'react';
import PropTypes from 'prop-types';

import EpisodeCardForMobile from './episode-card-for-mobile';
import ShowMoreButton from '../show-more-button';

const EpisodesTableForMobile = props => {
	const {rows, history, setClicked, clicked} = props;
	const [quantity, setQuantity] = useState(rows.length && rows.length < 10? rows.length: 10);
	return (
		<div>
			{
				rows && <>{rows
					.slice(0, quantity)
					.map(row => <div key={row.id}>
						<EpisodeCardForMobile clicked={clicked} setClicked={setClicked} history={history} row={row}/>
					</div>)}
				<ShowMoreButton rows={rows} quantity={quantity} setQuantity={setQuantity}/>
				</>
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
