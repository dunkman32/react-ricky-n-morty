import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
	NOTIFICATION_SUCCESS,
	NOTIFICATION_ERROR,
	NOTIFICATION_WARNING,
	NOTIFICATION_INFO
} from '../redux/actions/notification.action';
import PropTypes from 'prop-types';

const Notifications = (props) =>{
	useEffect(() => {
		const { notificationReducer } = props;
		if (notificationReducer) {
			const { type, message, callBack } = notificationReducer;
			switch (type) {
			case NOTIFICATION_INFO:
				NotificationManager.info('Info message');
				break;
			case NOTIFICATION_SUCCESS:
				NotificationManager.success('Success', message, 1500, callBack);
				break;
			case NOTIFICATION_WARNING:
				NotificationManager.warning('Warning', message, 1500, callBack);
				break;
			case NOTIFICATION_ERROR:
				NotificationManager.error('Error', message, 1500, callBack);
				break;
			default: NotificationManager.error('Error', message, 1500, callBack);
				break;
			}
		}
	});

	return (
		<NotificationContainer/>
	);
};

const mapStateToProps = (state) => ({
	notificationReducer: state.notificationReducer
});

Notifications.propTypes = {
	notificationReducer: PropTypes.object
};

export default connect(mapStateToProps)(Notifications);
