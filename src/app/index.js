import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from 'shared/config/routes';
import Layout from 'components/Layout';

const LAYOUTS = {
  full: [
    '/',
    '/404',
    '/500',
    '/forgot-password',
    '/reset-password',
    '/register',
  ],
};

@withRouter
export default class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    type: this.setType(),
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChange();
    }
  }

  onRouteChange() {
    this.setState({
      type: this.setType(),
    });
  }

  setType() {
    if (LAYOUTS.full.includes(this.props.location.pathname)) {
      return 'full';
    }

    return 'main';
  }

  render() {
    return (
      <Layout type={this.state.type}>
        <Routes />
      </Layout>
    );
  }
}
