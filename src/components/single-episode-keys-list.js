import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';

import bgImage from '../static/bgImage.jpg';
import FavoriteIcon from './favorite-icon';

const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.27), rgba(117, 19, 93, 0.43)), url(${bgImage})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: 'white',
	},
	actions: {
		zIndex: 1000,
		position: 'absolute',
		right: 10,
		top: 10
	},
});

const SingleEpisodeKeysList = (props) => {
	const classes = useStyles();
	const {episode} = props.episodeReducer;
	return (episode &&
        <div className={classes.root}>
        	<div className={classes.actions}><FavoriteIcon id={`episodes-${props.id}`}/></div>
        	<List component="nav" aria-label="secondary mailbox folders">
        		<ListItem><ListItemText primary={`Id - ${episode.id}`}/></ListItem>
        		<ListItem><ListItemText primary={`Name - ${episode.name}`}/></ListItem>
        		<ListItem><ListItemText primary={`Code - ${episode.episode}`}/></ListItem>
        		<ListItem>Created - {' '} <Moment format="YYYY/MM/DD HH:mm">{episode.created}</Moment></ListItem>
        	</List>
        </div>);
};

SingleEpisodeKeysList.propTypes = {
	episodeReducer: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
	episodeReducer: state.episodeReducer
});

export default connect(mapStateToProps)(SingleEpisodeKeysList);
