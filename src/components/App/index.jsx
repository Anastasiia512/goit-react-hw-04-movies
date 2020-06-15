import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../../pages/Nav/Nav';

const AsyncHomePage = lazy(() => import('../../pages/HomePage/index'));
const AsyncMovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/index'),
);
const AsyncMoviesPage = lazy(() => import('../../pages/MoviesPage/index'));

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
