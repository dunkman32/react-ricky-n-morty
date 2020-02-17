import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import {Close, FilterList} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getEpisodes} from '../redux/actions/episodes.action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCharacters} from '../redux/actions/characters.action';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const useStyles = makeStyles({
	typography: {display: 'flex', justifyContent: 'space-between'},
	input: {width: '47.5%'},
	largeInput: {width: '100%'},
	root: {zIndex: 999, position: 'absolute', right: -20, top: -20}
});


const DialogContent = withStyles(theme => ({
	root: {padding: theme.spacing(2)}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {margin: 0, padding: theme.spacing(1)}
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)(props => {
	const {children, classes, onClose, ...other} = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<Close/>
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const FilterTable = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const [status, setStatus] = React.useState('');
	const [species, setSpecies] = React.useState('');
	const [name, setName] = React.useState('');
	const [gender, setGender] = React.useState('');

	const {getEpisodes, getCharacters, isEpisode} = props;

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const prepareObjectForRequest = () => {
		const tmp = {};
		if (name) tmp.name = name;
		if (!isEpisode) {
			if (status) tmp.status = status;
			if (species) tmp.species = species;
			if (gender) tmp.status = gender;
		}
		return tmp;
	};

	const getFilteredData = () => {
		const params = prepareObjectForRequest();
		isEpisode ? getEpisodes(params) : getCharacters(params);
		handleClose();
	};

	return (
		<div className={classes.root}>
			<IconButton style={{backgroundColor: 'blue', color: 'white'}} onClick={handleClickOpen}>
				<FilterList/>
			</IconButton>
			<Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Filter Data
				</DialogTitle>
				<DialogContent dividers>
					<div className={classes.typography}>
						<TextField className={isEpisode ? classes.largeInput : classes.input} value={name}
							onChange={e => setName(e.target.value)}
							label="Name" variant="outlined"/>
						{!isEpisode && <TextField
							className={classes.input}
							select
							label="Select"
							value={status}
							onChange={(e) => {
								setStatus(e.target.value);
							}}
							helperText="select status"
							variant="outlined"
						>
							{statuses.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>}
					</div>
					{!isEpisode && <div className={classes.typography}>
						<TextField className={classes.input} value={species} onChange={e => setSpecies(e.target.value)}
							label="Species" variant="outlined"/>
						<TextField
							className={classes.input}
							select
							label="Select"
							value={gender}
							onChange={(e) => {
								setGender(e.target.value);
							}}
							helperText="select gender"
							variant="outlined"
						>
							{genders.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</div>}
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
                        Close
					</Button>
					<Button autoFocus onClick={getFilteredData} color="primary">
                        Save changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const statuses = [
	{
		value: '',
		label: 'Empty',
	}, {
		value: 'Alive',
		label: 'Alive',
	}, {
		value: 'Dead',
		label: 'Dead',
	}, {
		value: 'unknown',
		label: 'Unknown',
	},
];
const genders = [
	{
		value: '',
		label: 'Empty',
	}, {
		value: 'Female',
		label: 'Female',
	}, {
		value: 'Male',
		label: 'Male',
	}, {
		value: 'Genderless',
		label: 'Genderless',
	}, {
		value: 'unknown',
		label: 'Unknown',
	},
];

const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer,
	charactersReducer: state.charactersReducer
});

const mapDispatchToProps = dispatch => ({
	getEpisodes: params => {
		dispatch(getEpisodes(params));
	},
	getCharacters: params => {
		dispatch(getCharacters(params));
	},
});


FilterTable.propTypes = {
	getEpisodes: PropTypes.func.isRequired,
	episodesReducer: PropTypes.object.isRequired,
	charactersReducer: PropTypes.object.isRequired,
	getCharacters: PropTypes.func.isRequired,
	isEpisode: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTable);
