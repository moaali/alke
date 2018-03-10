import React, { Component } from 'react';
import { keys, random, values } from 'lodash';

import {
  VictoryChart,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryStack,
  VictoryBar,
} from 'victory';

import { CenterLabel, CompassCenter } from './components';

const directions = {
  0: 'E',
  45: 'NE',
  90: 'N',
  135: 'NW',
  180: 'W',
  225: 'SW',
  270: 'S',
  315: 'SE',
};

const orange = { base: 'gold', highlight: 'darkOrange' };
const red = { base: 'tomato', highlight: 'orangeRed' };
const innerRadius = 30;

export default class StackedPolarBars extends Component {
  constructor(props) {
    super(props);
    this.state = { wind: this.getWindData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ wind: this.getWindData() });
    }, 4000);
  }

  componentWillUnmount() {
    this.setStateInterval && clearInterval(this.setStateInterval);
    this.setStateInterval = null;
  }

  getWindData() {
    return keys(directions).map((d) => {
      const speed = Math.floor(random() * 17) + 4;
      return {
        windSpeed: speed,
        windGust: speed + random(2, 10),
        windBearing: +d,
      };
    });
  }

  render() {
    return (
      <VictoryChart
        polar
        animate={{ duration: 500, onLoad: { duration: 500 } }}
        theme={VictoryTheme.material}
        innerRadius={innerRadius}
        domainPadding={{ y: 10 }}
        events={[{
          childName: 'all',
          target: 'data',
          eventHandlers: {
            onMouseOver: () => {
              return [
                { target: 'labels', mutation: () => ({ active: true }) },
                { target: 'data', mutation: () => ({ active: true }) },
              ];
            },
            onMouseOut: () => {
              return [
                { target: 'labels', mutation: () => ({ active: false }) },
                { target: 'data', mutation: () => ({ active: false }) },
              ];
            },
          },
        }]}
      >
        <VictoryPolarAxis
          dependentAxis
          labelPlacement='vertical'
          style={{ axis: { stroke: 'none' } }}
          tickFormat={() => ''}
        />
        <VictoryPolarAxis
          labelPlacement='parallel'
          tickValues={keys(directions).map((k) => +k)}
          tickFormat={values(directions)}
        />
        <VictoryStack>
          <VictoryBar
            style={{
              data: {
                fill: (d, a) => a ? orange.highlight : orange.base,
                width: 40,
              },
            }}
            data={this.state.wind}
            x='windBearing'
            y='windSpeed'
            labels={() => null}
            labelComponent={<CenterLabel color={orange} />}
          />
          <VictoryBar
            style={{
              data: {
                fill: (d, a) => a ? red.highlight : red.base,
                width: 40,
              },
            }}
            data={this.state.wind}
            x='windBearing'
            y={(d) => d.windGust - d.windSpeed}
            labels={() => null}
            labelComponent={<CenterLabel color={red} />}
          />
        </VictoryStack>
        <CompassCenter />
      </VictoryChart>
    );
  }
}
