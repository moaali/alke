import React, { Component } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

const data3 = [
  { name: '2010', Iphone: 4000, Ipad: 2400, Ipod: 2400 },
  { name: '2011', Iphone: 3000, Ipad: 1398, Ipod: 2210 },
  { name: '2012', Iphone: 2000, Ipad: 9800, Ipod: 2290 },
  { name: '2013', Iphone: 2780, Ipad: 3908, Ipod: 2000 },
  { name: '2014', Iphone: 1890, Ipad: 4800, Ipod: 2181 },
  { name: '2015', Iphone: 2390, Ipad: 3800, Ipod: 2500 },
];

export default class RechartsScreen extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <BarChart
          data={data3}
          margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
        >
          <XAxis dataKey='name' stroke='rgba(0, 0, 0, 0.6)' />
          <YAxis stroke='rgba(0, 0, 0, 0.6)' />
          <CartesianGrid strokeDasharray='2 2' stroke='#e6ecf5' />
          <Tooltip />
          <Legend />
          <Bar dataKey='Iphone' fill='#37C936' />
          <Bar dataKey='Ipad' fill='#FF3C7E' />
          <Bar dataKey='Ipod' fill='#FFCC00' />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
