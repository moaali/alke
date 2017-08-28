import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import classNames from 'classnames/dedupe';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import './index.scss';

export default class Animation extends Component {
  static propTypes = {
    children  : PropTypes.any,
    className : PropTypes.string,
  }

  getDefaultStyle() {
    return {
      top     : 50,
      opacity : 0,
    };
  }

  getStyle() {
    return {
      top     : spring(0, presets.gentle),
      opacity : spring(1, presets.gentle),
    };
  }

  @autobind
  renderItems(interpolatedStyle) {
    const
      { className, children, ...props } = this.props,
      classes = classNames('Animation', className);

    return (
      <div
        className={classes}
        style={{
          transform: `translate3d(0, ${interpolatedStyle.top}px, 0)`,
          opacity: interpolatedStyle.opacity,
        }}
        {...props}
      >
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <Motion
        defaultStyle={this.getDefaultStyle()}
        style={this.getStyle()}
      >
        {this.renderItems}
      </Motion>
    );
  }
}
