import React, { Component } from 'react';
import { requestWithiD } from '../../services/apiService';
import './movieDetailsPage.scss';
import CategorySelector from '../../components/CategorySelector/index';
import { Route, Switch, Link } from 'react-router-dom';
import Cast from '../CastPage/index';
import Reviews from '../ReviewsPage/index';
import MovieDetailsPageItem from '../../components/MovieDetailsPageItem/index';
import {
  options,
  getOptionWithWalue,
  getCategoryFromLocation,
} from '../../helpers/selectOptions';

export default class MovieDetailsPage extends Component {
  state = {
    details: {},
    direction: null,
  };

  componentDidMount() {
    requestWithiD(this.props.match.params.movieId).then(response =>
      this.setState({ details: response.data }),
    );
  }

  handleGoBack = () => {
    this.props.history.push('/');
  };

  handleCategoryChange = options => {
    if (options) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${options.value}`,
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: '',
    });
  };

  render() {
    const { details } = this.state;
    const { match } = this.props;
    const { location } = this.props;
    const queryStringCategory = getCategoryFromLocation(location);
    const selectedOption = getOptionWithWalue(options, queryStringCategory);
    return (
      <>
        {
          <article>
            <MovieDetailsPageItem
              onGoBack={this.handleGoBack}
              items={details}
            />
            <CategorySelector
              onChange={this.handleCategoryChange}
              options={options}
              value={selectedOption}
            />
           
            <Switch>
              <Route path={`${match.path}/cast/info`} component={Cast} />
              <Route path={`${match.path}/reviews/info`} component={Reviews} />
            </Switch>
          </article>
        }
      </>
    );
  }
}
