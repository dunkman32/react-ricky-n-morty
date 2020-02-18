import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {isMobile} from 'react-device-detect';
import {NavLink} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		fontFamily: '\'Lobster\', cursive',
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
		color: '#ffdc73',
		textDecoration: 'none',
		border: 'none',
	},
	linkDropdown: {
		color: '#ccc',
		textDecoration: 'none',
		border: 'none',
		fontWeight: 'bold'
	},
	active: {
		color: 'white',
		textDecoration: 'none',
		border: '#ffdc73 1px solid',
		borderRadius: 5
	},
	activeDropdown: {
		color: 'black',
		textDecoration: 'none',
		border: 'black 1px solid',
		borderRadius: 5
	},
	header: {
		background: 'transparent'
	},
	favoriteBtn: {
		color: '#ffdc73',
		fontWeight: 'bold'
	}
}));

const SimpleMenu = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button className={classes.favoriteBtn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Favorites
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					<NavLink exact className={classes.linkDropdown} activeClassName={classes.activeDropdown} to='/favorite-episodes'>
						<Button color="inherit">
                            favorite episodes
						</Button>
					</NavLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<NavLink exact className={classes.linkDropdown} activeClassName={classes.activeDropdown} to='/favorite-characters'>
						<Button color="inherit">
                            favorite characters
						</Button>
					</NavLink>
				</MenuItem>

			</Menu>
		</div>
	);
};
export default function Header({transparent}) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar className={transparent ? classes.header : ''} position="absolute">
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
					{isMobile ? <SimpleMenu/> :
						<>
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
						</>
					}
				</Toolbar>
			</AppBar>
		</div>
	);
}
