import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Main from './pages/Main';
import Colony from './pages/Colony';
import History from './pages/History.js';
import Offer from './pages/Offer';
import Physics from './pages/Physics';
import ForMinors from './pages/ForMinors';
import Pasco from './pages/Pasco';
import Team from './pages/Team';
import Recomendations from './pages/Recomendations.js';
import Downloads from './pages/Downloads.js';
import Blog from './pages/Blog.js';
import Page404 from './pages/Page404';
function App() {
	AOS.init({
		duration: 600,
		once: true,
	});
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/oboz' component={Colony} />
				<Route exact path='/historia' component={History} />
				<Route exact path='/oferta' component={Offer} />
				<Route exact path='/fizyka-po-godzinach' component={Physics} />
				<Route exact path='/fizyka-dla-nieletnich' component={ForMinors} />
				<Route exact path='/pasco' component={Pasco} />
				<Route exact path='/zespol' component={Team} />
				<Route exact path='/rekomendacje' component={Recomendations} />
				<Route exact path='/do-pobrania' component={Downloads} />
				<Route exact path='/blog' component={Blog} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
