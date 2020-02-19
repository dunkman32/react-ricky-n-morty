import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {Link} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from "./favorite-icon";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	image: {
		width: '100%',
	},
	paper: {
		padding: 10,
		margin: 10,
		display: 'inline-block',
		'@media (min-width:600px)': {
			maxWidth: '360px',
		},
	},
	footer: {
		textAlign: 'center',
		margin: '0 auto'
	}
});

const SingleCharacter = (props) => {
	const {character, history} = props;
	const classes = useStyles();

	const routeOnSingleCharacterPage = (event, id) => {
		event.preventDefault();
		history.push(`/character/${id}`);
	};

	return (
		<Paper className={classes.paper}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<p>id -{` ${character.id}`}</p>
					<p>status -{` ${character.status}`}</p>
					<p>species -{` ${character.species}`}</p>
					<p>gender -{` ${character.gender}`}</p>
					<Tooltip title={'click to show more details'}>
						<IconButton onClick={e => routeOnSingleCharacterPage(e, character.id)}>
							<Link/>
						</IconButton>
					</Tooltip>
					<FavoriteIcon style={{zIndex: 1000}} id={`characters-${character.id}`}/>
				</Grid>
				<Grid item xs={6} sm={6}>
					<p>{character.name}</p>
					<img src={character.image} alt={'avatar'} className={classes.image}/>
				</Grid>
				<Divider/>
				<div className={classes.footer}>
					<p><Moment format="YYYY-MM-DD HH:mm">{character.created}</Moment></p>
				</div>
			</Grid>
		</Paper>
	);
};

SingleCharacter.propTypes = {
	character: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};


export default SingleCharacter;
