import React, { Component } from 'react';
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme } from 'victory';
import { range, random } from 'lodash';

export default class VictoryAreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  getData() {
    return range(7).map(() => {
      return [
        { x: 1, y: random(1, 5) },
        { x: 2, y: random(1, 10) },
        { x: 3, y: random(2, 10) },
        { x: 4, y: random(2, 10) },
        { x: 5, y: random(2, 15) },
      ];
    });
  }

  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
      >
        <VictoryStack
          colorScale={'blue'}
        >
          {
            this.state.data.map((data, i) => (
              <VictoryArea
                key={i}
                data={data}
                interpolation={'basis'}
              />
            ))
          }
        </VictoryStack>
      </VictoryChart>
    );
  }
}
