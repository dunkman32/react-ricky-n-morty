import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from './table-head';
import FavoriteIcon from './favorite-icon';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

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
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const {rows} = props;

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleClick = (event, id) => {
		console.log(props);
		event.preventDefault();
		props.history.push(`/episode/${id}`);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const emptyRows = rows ? rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage) : 20;
	return (
		<div className={classes.root}>
			{rows && <Paper className={classes.paper}>
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
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
												{row.air_date}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.episode}
											</TableCell>
											<TableCell>
												<FavoriteIcon style={{zIndex: 1000}} id={row.id}/>
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{height: 53 * emptyRows}}>
									<TableCell colSpan={6}/>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>}
		</div>
	);
}

EpisodesTable.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
};

export default EpisodesTable;
