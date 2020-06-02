import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage/index';
import MoviesPage from '../../pages/MoviesPage/index';
import MovieDetailsPage from '../../pages/MovieDetailsPage/index';
import Nav from '../../pages/Nav/Nav';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
