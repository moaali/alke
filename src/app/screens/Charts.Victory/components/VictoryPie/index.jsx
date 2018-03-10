import React, { Component } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

export default class VictoryPieChart extends Component {
  render() {
    return (
      <svg viewBox='0 0 400 400'>
        <VictoryPie
          width={400}
          height={400}
          data={[
            { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 },
          ]}
          innerRadius={68}
          labelRadius={100}
        />
        <VictoryLabel
          textAnchor='middle'
          x={200}
          y={200}
          text='Word(s)'
        />
      </svg>
    );
  }
}
