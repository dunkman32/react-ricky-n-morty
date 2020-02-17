import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ShowMoreButton = ({rows, quantity, setQuantity}) => {

	const showMore = () => (quantity + 5) < rows.length ? setQuantity(quantity + 5) :
		setQuantity(rows.length);

	return rows.length !== quantity && <>
		<Button onClick={showMore}>
            show more
		</Button>
	</>;
};

ShowMoreButton.propTypes = {
	rows: PropTypes.array.isRequired,
	quantity: PropTypes.number.isRequired,
	setQuantity: PropTypes.func.isRequired,
};


export default ShowMoreButton;
