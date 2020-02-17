import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import {makeStyles} from '@material-ui/core/styles';

import FavoriteIcon from '../favorite-icon';
import EnhancedTableHead from '../table-head';
import {getComparator, stableSort} from '../../utils/table-utils';
import CharactersImageDialog from '../characters-image-dialog';
import {getCharacters} from '../../redux/actions/characters.action';
import {connect} from 'react-redux';

const headCells = [
	{id: 'id', disablePadding: false, label: 'ID'},
	{id: 'name', disablePadding: false, label: 'Name'},
	{id: 'image', disablePadding: false, label: 'Image'},
	{id: 'status', disablePadding: false, label: 'Status'},
	{id: 'species', disablePadding: false, label: 'Species'},
	{id: 'gender', diablePadding: false, label: 'Gender'},
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
	image: {
		width: 48,
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
const CharactersTable = props => {
	const classes = useStyles();
	const {rows, setClicked, clicked, main, charactersReducer, getCharacters} = props;

	const [openImageDialog, setOpenImageDialog] = React.useState(false);
	const [order, setOrder] = React.useState('asc');
	const [image, setImage] = React.useState(null);
	const [orderBy, setOrderBy] = React.useState('calories');
	const [page, setPage] = React.useState(0);
	const data = main ? charactersReducer.results : rows;

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleClick = (event, id) => {
		event.preventDefault();
		props.history.push(`/character/${id}`);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		if (main) getCharacters(page + 1);
	}, [page]);

	return (
		<div className={classes.root}>
			{data && <Paper className={classes.paper}>
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
											<TableCell onClick={(e) => {
												e.preventDefault();
												setOpenImageDialog(true);
												setImage(row.image);
											}}>
												<img src={row.image} alt="character" className={classes.image}/>
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.status}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.species}
											</TableCell>
											<TableCell onClick={event => handleClick(event, row.id)}>
												{row.gender}
											</TableCell>
											<TableCell>
												<FavoriteIcon setClicked={setClicked} clicked={clicked}
													style={{zIndex: 1000}} id={`characters-${row.id}`}/>
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				{(main && charactersReducer.info) && <TablePagination
					rowsPerPageOptions={[20]}
					component="div"
					count={charactersReducer.info.count}
					rowsPerPage={data.length}
					page={page}
					onChangePage={handleChangePage}
				/>}
			</Paper>}
			<CharactersImageDialog open={openImageDialog}
				setOpen={setOpenImageDialog}
				image={image}/>
		</div>
	);
};

CharactersTable.propTypes = {
	info: PropTypes.object,
	rows: PropTypes.array,
	main: PropTypes.bool,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool,
	getCharacters: PropTypes.func.isRequired,
	charactersReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer
});

const mapDispatchToProps = dispatch => ({
	getCharacters: page => {
		dispatch(getCharacters(page));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersTable);
