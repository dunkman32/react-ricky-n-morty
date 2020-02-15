export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS';
export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR';
export const NOTIFICATION_WARNING = 'NOTIFICATION_WARNING';
export const NOTIFICATION_INFO = 'NOTIFICATION_INFO';
export const RESET_NOTIFICATION_STATE = 'RESET_NOTIFICATION_STATE';

export const ResetNotificationState = () => {
	return {
		type: RESET_NOTIFICATION_STATE
	};
};

const CreateNotification = (type, message, callBack=null) => {
	return {
		type,
		message,
		callBack
	};
};

const NotificationHandler = (type, message, callBack = null) => {
	return (dispatch) => {
		dispatch(CreateNotification(type, message, callBack));
		setTimeout(() => {
			dispatch(ResetNotificationState());
		});
	};
};

export default NotificationHandler;
