import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import { CustomLabel } from './components';


export default class CustomTooltipLabels extends Component {
  render() {
    return (
      <VictoryPie
        style={{ labels: { fill: 'white' } }}
        innerRadius={100}
        labelRadius={120}
        labels={(d) => d.y}
        labelComponent={<CustomLabel />}
        data={[
          { x: 1, y: 5 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 3 },
          { x: 5, y: 1 },
        ]}
      />
    );
  }
}
