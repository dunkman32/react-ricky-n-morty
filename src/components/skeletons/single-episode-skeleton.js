import React from 'react';
import {Skeleton} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '80%',
		margin: '0 auto'
	},
	skeleton: {
		transform: 'scale(1,.95)'
	}
});

const SingleEpisodeSkeleton = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<>
				<Skeleton height={200} width={'100%'} className={classes.skeleton}/>
				<Skeleton height={1000} width={'100%'} className={classes.skeleton}/>
			</>
		</div>
	);
};

export default SingleEpisodeSkeleton;
