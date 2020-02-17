import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './loading.css';

const Loading = ({loadingReducer}) => loadingReducer.show && <div className="mainDiv"><div className="loader"/></div>;

const mapStateToProps = (state) => ({
	loadingReducer: state.loadingReducer
});

Loading.propTypes = {
	loadingReducer: PropTypes.object
};

export default connect(mapStateToProps)(Loading);
