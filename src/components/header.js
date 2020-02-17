import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	link: {
		color: 'wheat',
		textDecoration: 'none',
		border: 'none',
	},
	active: {
		color: 'white',
		textDecoration: 'none',
		border: 'white 1px solid',
		borderRadius: 5
	},
	header: {
		background: 'transparent'
	}
}));

export default function Header({transparent}) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar className={transparent? classes.header: ''} position="absolute">
				<Toolbar className={classes.toolbar}>
					<NavLink exact className={classes.link} activeClassName={classes.active} to='/'>
						<Button color="inherit">
                            episodes
						</Button>
					</NavLink>
					<NavLink exact className={classes.link} activeClassName={classes.active} to='/characters'>
						<Button color="inherit">
                            characters
						</Button>
					</NavLink>
					<NavLink exact className={classes.link} activeClassName={classes.active} to='/favorite-episodes'>
						<Button color="inherit">
                            favorite episodes
						</Button>
					</NavLink>
					<NavLink exact className={classes.link} activeClassName={classes.active} to='/favorite-characters'>
						<Button color="inherit">
                            favorite characters
						</Button>
					</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}
