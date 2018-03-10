import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Debounce } from 'react-throttle';
import { autobind } from 'core-decorators';
import WindowSizeListener from 'react-window-size-listener';
import PropTypes from 'prop-types';
import Routes from 'shared/config/routes';
import Layout from 'components/Layout';

@withRouter
@inject('AppStore')
@observer
export default class App extends Component {
  static propTypes = {
    location : PropTypes.object.isRequired,
    AppStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  componentWillMount() {
    this.handleRouteChange();
    this.handleResize({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.remove();
      }, 300);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.handleRouteChange();
    }
  }

  @autobind
  handleRouteChange() {
    this.store.setLayout(this.props.location.pathname);
  }

  @autobind
  handleResize(windowSize) {
    this.store.setDimentions(
      windowSize.windowWidth,
      windowSize.windowHeight
    );

    this.store.setView();
  }

  render() {
    return (
      <Layout type={this.store.getLayout()}>
        <WindowSizeListener onResize={this.handleResize} />
        <Routes />
      </Layout>
    );
  }
}
