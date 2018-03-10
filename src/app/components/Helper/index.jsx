import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import './index.less';

export default class Helper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,

    className: PropTypes.string,
  }

  render() {
    return (
      <p  className={classNames('helperText pL-15 mY-15 d-f pos-r ai-c', this.props.className)}>
        {this.props.children}
      </p>
    );
  }
}
