import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', Visits: 4000, Purchases: 2400, Downloads: 2400 },
  { name: 'Tue', Visits: 3000, Purchases: 1398, Downloads: 2210 },
  { name: 'Wed', Visits: 2000, Purchases: 9800, Downloads: 2290 },
  { name: 'Thr', Visits: 2780, Purchases: 3908, Downloads: 2000 },
  { name: 'Fri', Visits: 1890, Purchases: 4800, Downloads: 2181 },
  { name: 'Sat', Visits: 2390, Purchases: 3800, Downloads: 2500 },
  { name: 'Sun', Visits: 3490, Purchases: 4300, Downloads: 2100 },
];

export default class RechartsScreen extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <LineChart
          data={data}
          margin={{ right: 10, left: -10 }}
        >
          <XAxis dataKey='name' stroke='rgba(0, 0, 0, 0.6)' />
          <YAxis stroke='rgba(0, 0, 0, 0.6)' />
          <CartesianGrid strokeDasharray='2 2' stroke='#e6ecf5' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Visits' stroke='#37C936' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='Purchases' stroke='#FF3C7E' />
          <Line type='monotone' dataKey='Downloads' stroke='#FFCC00' />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
