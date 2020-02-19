import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import {Link} from '@material-ui/icons';
import Moment from 'react-moment';

import FavoriteIcon from '../favorite-icon';

const EpisodeCardForMobile = (props) => {
	const {id, name, air_date, episode, created} = props.row;
	const {setClicked, clicked } = props;

	const routeOnSingleEpisodePage = (event, id) => {
		event.preventDefault();
		props.history.push(`/episode/${id}`);
	};

	return (
		<Paper style={{marginBottom: 20}}>
			<Grid container spacing={3}>
				<Grid item xs={7}>
					<p>id{' - '}{id}</p>
					<p>Air Date{' - '}{air_date}</p>
					<p>episode{' - '}{episode}</p>
				</Grid>
				<Grid item xs={4}>
					<p>name{' - '}{name}</p>
					<p>created{' - '}
						<Moment format="YYYY/MM/DD">{created}</Moment>
					</p>
					<IconButton onClick={e => routeOnSingleEpisodePage(e, id)}>
						<Link/>
					</IconButton>
					<FavoriteIcon setClicked={setClicked} clicked={clicked} style={{zIndex: 1000}} id={`episodes-${id}`}/>
				</Grid>
			</Grid>
		</Paper>
	);
};


EpisodeCardForMobile.propTypes = {
	row: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool
};

export default EpisodeCardForMobile;
