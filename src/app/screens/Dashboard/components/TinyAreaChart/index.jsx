import React, { Component } from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', Sales: 4000 },
  { name: 'Tue', Sales: 3000 },
  { name: 'Wed', Sales: 2000 },
  { name: 'Thr', Sales: 2780 },
  { name: 'Fri', Sales: 1890 },
  { name: 'Sat', Sales: 2390 },
  { name: 'Sun', Sales: 3490 },
];

export default class TinyAreaChart extends Component {
  render() {
    return (
      <AreaChart
        width={120}
        height={40}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <Area type='monotone' dataKey='Sales' stroke='#8884d8' fill='#4482FF' />
        <Tooltip />
      </AreaChart>
    );
  }
}
