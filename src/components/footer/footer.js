import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	fixed: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		padding: '15px 0',
	},
	nonFixed: {
		padding: '15px 0',
		color: '#000',
		width: '100%',
	},
	icon: {
		color: '#8e24aa',
		margin: '0 2.5px'
	}
});

const Footer = props => {
	const classes = useStyles();
	const color = props.color || '#8e24aa';
	const hurtColor = props.hurtColor || '#8e24aa';
	return (
		<div className={props.fixed ? classes.fixed : classes.footer} style={{ fontFamily: '\'Lobster\', cursive' }}>
			<Grid container className={classes.root}>
				<Grid container xs={12} item justify="center" style={{color}}>
                    &copy; {1900 + new Date().getYear()}, made with{' '}
					<Favorite style={{ color: hurtColor }} className={classes.icon}/> by{' '}
                    noZZa.
				</Grid>
			</Grid>
		</div>
	);
};

Footer.propTypes = {
	color: PropTypes.string.isRequired,
	hurtColor: PropTypes.string.isRequired,
	fixed: PropTypes.bool.isRequired,
};

export default Footer;
