import React, { Component, lazy, Suspense } from 'react';
import { requestWithiD } from '../../services/apiService';
import './movieDetailsPage.scss';
import { Route, Switch } from 'react-router-dom';
import MovieDetailsPageItem from '../../components/MovieDetailsPageItem/index';

const AsyncCast = lazy(() => import('../CastPage/index'));
const AsyncReviews = lazy(() => import('../ReviewsPage/index'));

export default class MovieDetailsPage extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    requestWithiD(this.props.match.params.movieId).then(response =>
      this.setState({ details: response.data }),
    );
  }

  handleGoBack = () => {
    this.props.history.push('/');
  };

  render() {
    const { details } = this.state;
    const { match } = this.props;
    return (
      <>
        {
          <article>
            <MovieDetailsPageItem
              onGoBack={this.handleGoBack}
              items={details}
              match={match}
            />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch >
                <Route path={`${match.path}/cast/info`} component={AsyncCast} />
                <Route
                  path={`${match.path}/reviews/info`}
                  component={AsyncReviews}
                />
              </Switch>
            </Suspense>
          </article>
        }
      </>
    );
  }
}
