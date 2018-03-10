import React, { Component } from 'react';
import { BarChart, Bar, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', Customers: 2400 },
  { name: 'Tue', Customers: 1398 },
  { name: 'Wed', Customers: 9800 },
  { name: 'Thr', Customers: 3908 },
  { name: 'Fri', Customers: 4800 },
  { name: 'Sat', Customers: 3800 },
  { name: 'Sun', Customers: 4300 },
];

export default class TinyBarChart extends Component {
  render() {
    return (
      <BarChart width={120} height={40} data={data}>
        <Bar dataKey='Customers' fill='#00b16a' />
        <Tooltip />
      </BarChart>
    );
  }
}
