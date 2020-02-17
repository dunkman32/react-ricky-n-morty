import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from '@material-ui/icons';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '../favorite-icon';

import Css from './cheared.module.css';

const CharacterCardForMobile = (props) => {
	const {id, name, status, gender, image} = props.row;

	const handleClick = (event, id) => {
		event.preventDefault();
		props.history.push(`/character/${id}`);
	};

	return (
		<Paper className={Css.card}>
			<Grid container spacing={3}>
				<Grid item xs={12}  className={Css.outerGrid}>
					<div className={Css.imageGrid}>
						<img src={image} alt="character" className={Css.image}/>
					</div>
				</Grid>
				<Grid item xs={6}>
					<p>id{' - '}{id}</p>
					<p>Status{' - '}{status}</p>
					<p>gender{' - '}{gender}</p>
				</Grid>
				<Grid item xs={6}>
					<p>name{' - '}{name}</p>
					<IconButton onClick={e => handleClick(e, id)}>
						<Link/>
					</IconButton>
					<FavoriteIcon style={{zIndex: 1000}} id={`characters-${id}`}/>
				</Grid>
			</Grid>
		</Paper>
	);
};


CharacterCardForMobile.propTypes = {
	row: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool
};

export default CharacterCardForMobile;
