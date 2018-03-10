import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryTooltip, VictoryLabel } from 'victory';

export default class CustomLabel extends Component {
  static defaultEvents = VictoryTooltip.defaultEvents;
  static propTypes = { text: PropTypes.string };

  render() {
    return (
      <g>
        <VictoryLabel {...this.props} />
        <VictoryTooltip
          {...this.props}
          x={200}
          y={250}
          text={`# ${this.props.text}`}
          orientation='top'
          pointerLength={0}
          cornerRadius={50}
          width={100}
          height={100}
          flyoutStyle={{ fill: 'black' }}
        />
      </g>
    );
  }
}
