import React, { Component } from 'react';
import PropTypes from 'prop-types';

const orange = { base: 'gold', highlight: 'darkOrange' };
const red = { base: 'tomato', highlight: 'orangeRed' };
const innerRadius = 30;

export default class CompassCenter extends Component {
  static propTypes = {
    origin: PropTypes.object,
  }

  render() {
    const { origin } = this.props;
    const circleStyle = {
      stroke: red.base, strokeWidth: 2, fill: orange.base,
    };
    return (
      <g>
        <circle
          cx={origin.x}
          cy={origin.y}
          r={innerRadius}
          style={circleStyle}
        />
      </g>
    );
  }
}
