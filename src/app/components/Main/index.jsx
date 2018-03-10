import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.less';

@inject('AppStore')
@observer
export default class Main extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  render() {
    const isMobileView = this.store.getView() === 'MobileView';
    const isCollapsed = do {
      if (!isMobileView) {
        this.store.isCollapsed();
      } else {
        false;
      }
    };

    return (
      <main
        id='Main'
        className={
          classNames({
            'expanded': isCollapsed,
            'MobileView': isMobileView,
          })
        }
      >
        {this.props.children}
      </main>
    );
  }
}
