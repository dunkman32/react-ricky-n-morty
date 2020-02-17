import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import FavoriteIcon from '../favorite-icon';

const EpisodeCardForMobile = (props) => {
	const {id, name, air_date, episode} = props.row;

	const handleClick = (event, id) => {
		event.preventDefault();
		props.history.push(`/episode/${id}`);
	};

	return (
		<Paper onClick={e => handleClick(e, id)}>
			<Grid container spacing={3}>
				<Grid item xs={7}>
					<p>id{' - '}{id}</p>
					<p>Air Date{' - '}{air_date}</p>
					<p>episode{' - '}{episode}</p>
				</Grid>
				<Grid item xs={4}>
					<p>name{' - '}{name}</p>
					<FavoriteIcon style={{zIndex: 1000}} id={`episodes-${id}`}/>
				</Grid>
			</Grid>
		</Paper>
	);
};


EpisodeCardForMobile.propTypes = {
	row: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default EpisodeCardForMobile;
