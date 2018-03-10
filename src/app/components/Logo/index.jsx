import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import Logo from './logo.component.svg';
import './index.less';

export default class Helper extends Component {
  static propTypes = {
    className : PropTypes.string,
    width     : PropTypes.number,
    height    : PropTypes.number,
  }

  render() {
    return (
      <div className={classNames('Logo pos-r z-9', this.props.className)}>
        <div className='LogoInner d-f ai-c jc-c bdrs-50'>
          <Logo width={this.props.width || 80} height={this.props.height || 80} />
        </div>
      </div>
    );
  }
}
