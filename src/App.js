import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Episodes from './views/episodes';
import Episode from './views/episode';
import Notifications from './components/notifications';
import PageNotFound from './views/page-not-found';
import Characters from './views/characters';
import Character from './views/character';
import FavoriteCharacters from './views/favorite-characters';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Episodes}/>
				<Route path="/episode/:id" component={Episode}/>
				<Route exact path="/characters" component={Characters}/>
				<Route path="/character/:id" component={Character}/>
				<Route path="/favorite-characters" component={FavoriteCharacters}/>
				<Route component={PageNotFound}/>
			</Switch>
			<Notifications/>
		</div>
	);
};

export default App;
