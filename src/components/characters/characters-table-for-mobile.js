import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import CharacterCardForMobile from './character-card-for-mobile';
import Button from '@material-ui/core/Button';
import {getCharacters} from '../../redux/actions/characters.action';
import {connect} from 'react-redux';

const CharactersTableForMobile = props => {
	const {rows, history, setClicked, clicked, main, charactersReducer, getCharacters} = props;
	const [page, setPage] = React.useState(0);
	const data = main ? charactersReducer.results : rows;

	useEffect(() => {
		if(main) getCharacters(page + 1);
	}, [page]);

	return (
		<div>
			{
				data && <>
					{
						data.map(row => <div key={row.id}>
							<CharacterCardForMobile setClicked={setClicked} clicked={clicked} history={history} row={row}/>
						</div>)
					}
					{
						(main && charactersReducer.info) && <>{
							page !== 0 && <Button onClick={() => setPage(page - 1)}>prev</Button>
						}{' '}{
							charactersReducer.info.pages !== page + 1 && <Button onClick={() => setPage(page + 1)}>next</Button>
						}</>
					}
				</>}
		</div>
	);
};

CharactersTableForMobile.propTypes = {
	rows: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
	setClicked: PropTypes.func,
	clicked: PropTypes.bool,
	getCharacters: PropTypes.func.isRequired,
	charactersReducer: PropTypes.object.isRequired,
	main: PropTypes.bool,

};

const mapStateToProps = state => ({
	charactersReducer: state.charactersReducer
});

const mapDispatchToProps = dispatch => ({
	getCharacters: page => {
		dispatch(getCharacters(page));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersTableForMobile);
