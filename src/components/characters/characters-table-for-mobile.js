import React from 'react';
import PropTypes from 'prop-types';

import CharacterCardForMobile from './character-card-for-mobile';

const CharactersTableForMobile = props => {
	const {rows, history} = props;
	return (
		<div>
			{
				rows && rows.map(row => <div key={row.id}>
					<CharacterCardForMobile history={history} row={row}/>
				</div>)
			}
		</div>
	);
};

CharactersTableForMobile.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
};

export default CharactersTableForMobile;
