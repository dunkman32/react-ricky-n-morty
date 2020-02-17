import React from 'react';
import PropTypes from 'prop-types';

import CharacterCardForMobile from './character-card-for-mobile';

const CharactersTableForMobile = props => {
	const {rows, history, setClicked, clicked} = props;
	return (
		<div>
			{
				rows && rows.map(row => <div key={row.id}>
					<CharacterCardForMobile setClicked={setClicked} clicked={clicked} history={history} row={row}/>
				</div>)
			}
		</div>
	);
};

CharactersTableForMobile.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool
};

export default CharactersTableForMobile;
