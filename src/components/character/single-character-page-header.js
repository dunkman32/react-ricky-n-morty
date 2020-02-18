import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '../favorite-icon';
import Css from './cheared.module.css';

const SingleCharacterPageHeader = props => {
	const {data} = props;
	return (
		<div className={Css.main}>
			<div className={Css.upper}>
				<div className={Css.imageDiv}>
					<div className={Css.favoriteIcon}>
						<FavoriteIcon id={`characters-${data.id}`}/>
					</div>
					<img className={Css.image} src={data.image} alt="character"/>
				</div>
			</div>
			<div className={Css.infos}>
				<div className={Css.infoTexts}>
					<h3 style={{fontWeight: 'bold', marginBottom: '3px'}}>
						{data.name}{' ,'}{data.id}
					</h3>
					<div className={Css.gridDiv}>
						<Grid style={{width: 300}} container spacing={3}>
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
	data: PropTypes.object.isRequired,
};

export default SingleCharacterPageHeader;
