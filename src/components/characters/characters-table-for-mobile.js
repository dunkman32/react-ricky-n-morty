import React, {useState} from 'react';
import PropTypes from 'prop-types';

import CharacterCardForMobile from './character-card-for-mobile';
import Button from '@material-ui/core/Button';
import ShowMoreButton from '../show-more-button';

const CharactersTableForMobile = props => {
	const {rows, history, setClicked, clicked} = props;
	const [quantity, setQuantity] = useState(rows.length && rows.length < 10? rows.length: 10);

	return (
		<div>
			{
				rows && <>
					{rows
						.slice(0, quantity)
						.map(row => <div key={row.id}>
							<CharacterCardForMobile setClicked={setClicked} clicked={clicked} history={history} row={row}/>
						</div>)}
					<ShowMoreButton rows={rows} quantity={quantity} setQuantity={setQuantity}/>
				</>}
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
