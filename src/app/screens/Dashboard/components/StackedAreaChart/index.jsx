import React, { Component } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', Chrome: 4000, Firefox: 2400, Opera: 2400 },
  { name: 'Feb', Chrome: 3000, Firefox: 1398, Opera: 2210 },
  { name: 'Mar', Chrome: 2000, Firefox: 9800, Opera: 2290 },
  { name: 'Apr', Chrome: 2780, Firefox: 3908, Opera: 2000 },
  { name: 'May', Chrome: 1890, Firefox: 4800, Opera: 2181 },
  { name: 'June', Chrome: 2390, Firefox: 3800, Opera: 2500 },
];


export default class StackedAreaChart extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
        >
          <XAxis dataKey='name' stroke='rgba(0, 0, 0, 0.6)' />
          <YAxis stroke='rgba(0, 0, 0, 0.6)' />
          <CartesianGrid strokeDasharray='2 2' stroke='#e6ecf5' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Chrome'
            stackId='1'
            stroke='#37C936'
            fill='#37C936'
          />
          <Area
            type='monotone'
            dataKey='Firefox'
            stackId='1'
            stroke='#FF3C7E'
            fill='#FF3C7E'
          />
          <Area
            type='monotone'
            dataKey='Opera'
            stackId='1'
            stroke='#FFCC00'
            fill='#FFCC00'
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
