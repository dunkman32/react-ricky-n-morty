import React from 'react';
import './styles/character.css';
import img from '../static/stars.jpg';
import SingleCharacterPageHeader from '../components/character/single-character-page-header';

const Character = () => {
	return (
		<div>
			<SingleCharacterPageHeader img={img}/>
		</div>
	);
};

export default Character;
