import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Favorite} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const FavoriteIcon = (props) => {
	const {id} = props;
	const [favorites, setFavorites] = React.useState({});
	const [checked, setChecked] = React.useState(0);

	const parseLocalstorage = () => {
		setFavorites(Array.apply(0, new Array(localStorage.length))
			.map((o, i) => localStorage.key(i)));
	};

	const markAsFavorite = (id) => {
		const saved = localStorage.getItem(id.toString());
		if (saved) {
			localStorage.removeItem(id.toString());
		} else {
			localStorage.setItem(id.toString(), id);
		}
		setChecked(checked + 1);
	};

	useEffect(() => {
		parseLocalstorage();
	}, [checked]);

	const fillIconIfItemMarkedAsFavourite = (id) => {
		if (favorites instanceof Array) {
			return favorites.includes(id.toString());
		}
	};

	return (
		<Tooltip title="Favorite">
			<IconButton
				style={{color: fillIconIfItemMarkedAsFavourite(id) ? '#FFD700' : '#cbcbcb'}}
				onClick={() => markAsFavorite(id)}
				aria-label="Favorite">
				<Favorite/>
			</IconButton>
		</Tooltip>
	);
};

FavoriteIcon.propTypes = {
	id: PropTypes.number,
};


export default FavoriteIcon;