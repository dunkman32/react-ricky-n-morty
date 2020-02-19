import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import nebula from '../static/nebula.jpg';
import gif from '../static/rick-and-morty-gif.gif';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	paper: {
		width: '90%',
		textAlign: 'center',
		minHeight:  250,
		padding: '40px 20px',
		position: 'relative',
		background: `linear-gradient(to top, #B26992, rgba(130,43,102,.4)), url(${nebula})`
	},
	text: {
		fontSize: 24,
		color: 'white',
		fontWeight: 'bold'
	},
	button: {marginTop: 100},
	link: {textDecoration: 'none'},
	imageDiv: {
		position: 'absolute',
		bottom: 5,
		right: 5,
		width: '20%'
	},
	image: {
		width: '100%'
	}
});

const EmptyFavoritesInfo = ({text, link}) => {
	const classes = useStyles();
	const computeRedirectUrl = link === '/favorite-episodes'? '/':'/characters';

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<span className={classes.text}>{text}</span>
				<Link className={classes.link} to={computeRedirectUrl}>
					<Button className={classes.button} variant="outlined" size="large" style={{
						border: '2px solid rgb(237, 2, 131)',
						fontWeight: 'bold',
						color: 'white'
					}}>return and choose</Button>
				</Link>
				<div className={classes.imageDiv}>
					<img className={classes.image} src={gif} alt="rick n morty"/>
				</div>
			</Paper>
		</div>
	);
};

EmptyFavoritesInfo.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default EmptyFavoritesInfo;
