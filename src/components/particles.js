import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';

const ParticlesBg = ({numbers}) => {
	return (
		<Particles
			style={{
				backgroundColor: '#374057',
				position: 'absolute',
				top: 0, left: 0, right: 0,
			}}
			params={{
				'particles': {
					'number': {
						'value': numbers
					},
					'size': {
						'value': 3
					}
				},
				'interactivity': {
					'events': {
						'onhover': {
							'enable': true,
							'mode': 'repulse'
						}
					}
				}}}
		/>
	);
};

ParticlesBg.propTypes = {
	numbers: PropTypes.number.isRequired,
};

export default ParticlesBg;
