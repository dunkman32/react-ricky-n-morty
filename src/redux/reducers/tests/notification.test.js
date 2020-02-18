import {expect} from 'chai';
import LoadingReducer from '../loading.reducer';

const defaultActions = {
    show: false
};

describe('loading reducer', () => {

    it('should test reducer with undefined state', () => {
        expect(LoadingReducer(undefined, defaultActions).show).equal(false);
    });

    it('should test reducer with defined state', () => {
        expect(LoadingReducer({}, {type: 'TOGGLE_LOADING',show: true}).show).equal(true);
        expect(LoadingReducer({}, {type: 'TOGGLE_LOADING',show: false}).show).equal(false);
    });

});
