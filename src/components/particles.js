import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import image from '../static/r-n-m-favorites.jpg';

const ParticlesBg = ({numbers}) => {
	return (
		<Particles
			style={{
				backgroundImage: `linear-gradient(to top, rgba(96, 168, 233, 0.9), rgba(214, 47, 166, 0.3), rgba(214, 47, 166, 0.1)), url(${image})`,
				backgroundPosition: 'center', /* Center the image */
				backgroundRepeat: 'no-repeat', /* Do not repeat the image */
				backgroundSize: 'cover', /* Resize the background image to cover the entire container */
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
