import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Episodes from './views/episodes';
import Episode from './views/episode';
import Notifications from './components/notifications';
import PageNotFound from './views/page-not-found';
import Characters from './views/characters';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Episodes}/>
				<Route path="/episode/:id" component={Episode}/>
				<Route path="/characters" component={Characters}/>
				<Route component={PageNotFound}/>
			</Switch>
			<Notifications/>
		</div>
	);
};

export default App;
