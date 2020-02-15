const defaultState = null;

const NotificationReducer = (state = defaultState, action) => {
	if (action.type === 'NOTIFICATION_ERROR' ||
        action.type === 'NOTIFICATION_INFO' ||
        action.type === 'NOTIFICATION_SUCCESS' ||
        action.type === 'NOTIFICATION_WARNING')
	{
		return {
			type: action.type,
			message: action.message,
			callBack: action.callBack
		};
	}

	if (action.type === 'RESET_NOTIFICATION_STATE'){
		return defaultState;
	}

	return state;
};

export default NotificationReducer;
