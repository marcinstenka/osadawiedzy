import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Colony from './pages/Colony';
import History from './pages/History.js';
import Offer from './pages/Offer';
import Studies from './pages/Studies';
import Team from './pages/Team';
import Recomendations from './pages/Recomendations.js';
import Downloads from './pages/Downloads.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/oboz" component={Colony} />
        <Route exact path="/historia" component={History} />
        <Route exact path="/oferta" component={Offer} />
        <Route exact path="/fizyka-po-godzinach" component={Studies} />
        <Route exact path="/zespol" component={Team} />
        <Route exact path="/rekomendacje" component={Recomendations} />
        <Route exact path="/do-pobrania" component={Downloads} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/kontakt" component={Contact} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
