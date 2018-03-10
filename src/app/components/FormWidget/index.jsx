import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import './index.less';

export default class FormWidget extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,

    className: PropTypes.string,
  }

  render() {
    return (
      <div className={classNames('FormWidget d-f h-100 ovY-a fxd-c pos-r z-1 p-70', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
