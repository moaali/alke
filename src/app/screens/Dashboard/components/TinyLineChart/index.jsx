import React, { Component } from 'react';
import { LineChart, Line, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', Trend: 2400 },
  { name: 'Tue', Trend: 1398 },
  { name: 'Wed', Trend: 9800 },
  { name: 'Thr', Trend: 3908 },
  { name: 'Fri', Trend: 4800 },
  { name: 'Sat', Trend: 3800 },
  { name: 'Sun', Trend: 4300 },
];

export default class TinyLineChart extends Component {
  render() {
    return (
      <LineChart width={120} height={40} data={data}>
        <Line type='monotone' dataKey='Trend' stroke='#f64744' strokeWidth={2} />
        <Tooltip />
      </LineChart>
    );
  }
}
