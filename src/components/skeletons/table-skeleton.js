import React from 'react';
import {Skeleton} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '80%',
		margin: '0 auto'
	},
});

const TableSkeleton = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{[...Array(10).keys()].map(key =>
				<div key={key}>
					<Skeleton height={55} />
				</div>)
			} 
		</div>
	);
};

export default TableSkeleton;
