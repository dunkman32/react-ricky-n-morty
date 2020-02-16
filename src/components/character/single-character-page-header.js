import React from 'react';
import PropTypes from 'prop-types';
import Css from './cheared.module.css';
import FavoriteIcon from '../favorite-icon';
import Grid from '@material-ui/core/Grid';

const SingleCharacterPageHeader = props => {
	const {img} = props;
	const data = {
		id: '12',
		name: 'Ricky',
		status: 'Alive',
		species: 'Human',
		type: 'type',
		gender: 'Man',
		image: img
	};
	return (
		<div className={Css.main}>
			<div className={Css.upper}>
				<div className={Css.favoriteIcon}>
					<FavoriteIcon id={data.id}/>
				</div>
				<img src={data.image} className={Css.image} alt="character"/>
			</div>
			<div className={Css.infos}>
				<div className={Css.infoTexts}>
					<h3 style={{fontWeight: 'bold', marginBottom: '3px'}}>
                        {data.name}{' ,'}{data.id}
					</h3>
					<div className={Css.gridDiv}>
						<Grid style={{width: 200}} container spacing={3}>
							<Grid item xs={6}>
								<span>{data.species}</span>
								<span>{data.status}</span>
							</Grid>
							<Grid item xs={6}>
								<span>{data.type}</span>
								<span>{data.gender}</span>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</div>
	);
};

SingleCharacterPageHeader.propTypes = {
	img: PropTypes.any.isRequired,
};

export default SingleCharacterPageHeader;
