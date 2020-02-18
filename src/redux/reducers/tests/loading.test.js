import {expect} from 'chai';
import NotificationReducer from '../notification.reducer';

const defaultActions = {
	message: 'action.message',
};

describe('notification reducer', () => {

	it('should test reducer with undefined state', () => {
		expect(NotificationReducer(undefined, {})).equal(null);
	});

	it('should test reducer with defined state', () => {
		expect(NotificationReducer({}, {type: 'NOTIFICATION_ERROR',...defaultActions}).message).equal(defaultActions.message);
		expect(NotificationReducer({}, {type: 'NOTIFICATION_INFO',...defaultActions}).message).equal(defaultActions.message);
		expect(NotificationReducer({}, {type: 'NOTIFICATION_SUCCESS',...defaultActions}).message).equal(defaultActions.message);
		expect(NotificationReducer({}, {type: 'NOTIFICATION_WARNING',...defaultActions}).message).equal(defaultActions.message);
	});

});
