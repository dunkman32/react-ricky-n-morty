import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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
		['@media (min-width:600px)']: {
			maxWidth: '360px',
		},
	},
	footer: {
		textAlign: 'center',
		margin: '0 auto'
	}
});

const SingleCharacter = (props) => {
	const {character} = props;
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<p>id -{` ${character.id}`}</p>
					<p>status -{` ${character.status}`}</p>
					<p>species -{` ${character.species}`}</p>
					<p>gender -{` ${character.gender}`}</p>
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
};


export default SingleCharacter;
