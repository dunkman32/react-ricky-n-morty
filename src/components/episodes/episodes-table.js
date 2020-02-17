import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getComparator, stableSort} from '../../utils/table-utils';
import EnhancedTableHead from '../table-head';
import FavoriteIcon from '../favorite-icon';
import {getEpisodes} from '../../redux/actions/episodes.action';
import {connect} from 'react-redux';
import FilterTable from '../filter';

const headCells = [
	{id: 'id', disablePadding: false, label: 'ID'},
	{id: 'name', disablePadding: false, label: 'Name'},
	{id: 'episode', diablePadding: false, label: 'Code'},
	{id: 'air_date', disablePadding: false, label: 'Air Date'},
	{id: 'actions', disablePadding: false, label: 'Actions'},
];

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

const EpisodesTable = props => {
	const classes = useStyles();
	const {rows, setClicked, clicked, episodesReducer, main, getEpisodes} = props;
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [page, setPage] = React.useState(0);
	const data = main ? episodesReducer.results : rows;

	useEffect(() => {
		if(main) getEpisodes({page: (page + 1)});
	}, [page]);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleClick = (event, id) => {
		event.preventDefault();
		props.history.push(`/episode/${id}`);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div className={classes.root}>
			{data && <Paper className={classes.paper}>
				<FilterTable isEpisode/>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={'medium'}
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							headCells={headCells}
							classes={classes}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={data.length}
						/>
						<TableBody>
							{stableSort(data, getComparator(order, orderBy))
								.map((row) => {
									return (
										<TableRow
											style={{cursor: 'pointer'}}
											hover
											role="checkbox"
											tabIndex={-1}
											key={row.id}
										>
											<TableCell
												component="th"
												id={row.id}
												onClick={event => handleClick(event, row.id)}
												scope="row">
												{row.id}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.name}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.episode}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.air_date}
											</TableCell>
											<TableCell>
												<FavoriteIcon clicked={clicked} setClicked={setClicked} style={{zIndex: 1000}} id={`episodes-${row.id}`}/>
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				{(main && episodesReducer.info) && <TablePagination
					rowsPerPageOptions={[20]}
					component="div"
					count={episodesReducer.info.count}
					rowsPerPage={data.length}
					page={page}
					onChangePage={handleChangePage}
				/>}
			</Paper>}
		</div>
	);
};

EpisodesTable.propTypes = {
	rows: PropTypes.array,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool,
	getEpisodes: PropTypes.func.isRequired,
	episodesReducer: PropTypes.object.isRequired,
	main: PropTypes.bool
};

const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer
});

const mapDispatchToProps = dispatch => ({
	getEpisodes: params => {
		dispatch(getEpisodes(params));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesTable);
