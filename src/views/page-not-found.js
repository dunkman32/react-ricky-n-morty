import React from 'react';
import {Link} from 'react-router-dom';
import randomColor from 'randomcolor';
import {isMobile} from 'react-device-detect';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Footer from '../components/footer/footer';
import pattern from '../static/pattern.svg';
import travolta from '../static/travolta.gif';

const useStyles = makeStyles({
	imageForBrowser: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		height: '60%'
	},
	bodyForBrowser: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
		top: 0,
		backgroundColor: '#f5f5f5',
		backgroundImage: `url(${pattern})`,
	},
	link: {
		textDecoration: 'none',
		fontSize: 32
	},
	text404Browser: {
		fontSize: 114,
		fontWeight: 'bolder',
		marginBottom: 15,
	},
	textDescription: {
		fontStyle: 'italic'
	},
});
const PageNotFound = () => {
	const color = randomColor({luminosity: 'dark'});
	const classes = useStyles();
	return <>
		{isMobile ?
			<div className={classes.bodyForBrowser}>
				<h1 className={classes.text404Browser} style={{color}}>404</h1>
				<h3 className={classes.textDescription} style={{color}}>We are sorry, Page Not Found...</h3>
				<Link className={classes.link} to={'/'}>
					<Button variant="outlined" size="large" style={{
						border: `${color} solid 1px`,
						fontWeight: 'bold',
					}}>Return Back</Button>
				</Link>
				<img style={{width: '100%'}} src={travolta} alt={'travolta'}/>
				<div style={{color, fontWeight: 'bold'}}>
					<Footer color={'white'} hurtColor={color} fixed/>
				</div>
			</div> : <div className={classes.bodyForBrowser}>
				<h1 className={classes.text404Browser} style={{color}}>404</h1>
				<h3 className={classes.textDescription} style={{color}}>We are sorry, Page Not Found...</h3>
				<Link className={classes.link} to={'/'}>
					<Button variant="outlined" size="large" style={{
						border: `${color} solid 1px`,
						fontWeight: 'bold',
					}}>Return Back</Button>
				</Link>
				<img className={classes.imageForBrowser} src={travolta} alt={'travolta'}/>
				<Footer color={'black'} hurtColor={color} fixed/>
			</div>
		}
	</>;
};

export default PageNotFound;
