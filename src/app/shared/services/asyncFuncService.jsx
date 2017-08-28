import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import Nprogress from 'nprogress';
import { inject, observer } from 'mobx-react';
import 'react-placeholder/lib/reactPlaceholder.css';
import 'nprogress/nprogress.css';

export default function asyncComponent(importComponent) {
  @inject('AsyncFuncStore')
  @observer
  class AsyncFunc extends Component {
    static propTypes = {
      AsyncFuncStore: PropTypes.object,
    }

    componentWillMount() {
      Nprogress.start();
    }

    async componentDidMount() {
      const { default: Element } = await importComponent();
      Nprogress.done();
      this.props.AsyncFuncStore.setTarget(<Element {...this.props} />);
    }

    render() {
      const
        Element = this.props.AsyncFuncStore.getTarget() || <div />;

      return (
        <ReactPlaceholder type='text' rows={7} ready={Element !== null}>
          {Element}
        </ReactPlaceholder>
      );
    }
  }

  return AsyncFunc;
}
