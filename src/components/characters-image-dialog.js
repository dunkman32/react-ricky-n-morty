import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';

const CharactersImageDialog = ({image, open, setOpen}) => {

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			fullWidth
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogContent>
				<img style={{width: '100%'}} src={image} alt="character"/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
                    Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

CharactersImageDialog.propTypes = {
	image: PropTypes.any,
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired
};


export default CharactersImageDialog;
