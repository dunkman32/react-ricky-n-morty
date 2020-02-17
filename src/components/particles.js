import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';

const ParticlesBg = ({numbers}) => {
	return (
		<Particles
			style={{
				backgroundImage: 'linear-gradient(to bottom, rgba(96, 168, 233, 0.9), rgba(214, 47, 166, 0.3), rgba(214, 47, 166, 0.1))',
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
