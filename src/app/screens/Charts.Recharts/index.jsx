import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import md5 from 'js-md5';
import { Col } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  BarChart,
  ReferenceLine,
  AreaChart,
  ScatterChart,
  Scatter,
  ComposedChart,
  Area,
  PieChart,
  Pie,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
  Bar,
  ResponsiveContainer,
} from 'recharts';

import {
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: 'Page A', uv: 4000, pv: 9000 },
  { name: 'Page B', uv: 3000, pv: 7222 },
  { name: 'Page C', uv: 2000, pv: 6222 },
  { name: 'Page D', uv: 1223, pv: 5400 },
  { name: 'Page E', uv: 1890, pv: 3200 },
  { name: 'Page F', uv: 2390, pv: 2500 },
  { name: 'Page G', uv: 3490, pv: 1209 },
];

const data3 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data4 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data5 = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: -52, pv: 246 },
  { name: '32', uv: 154, pv: 33 },
  { name: '33', uv: 205, pv: 354 },
  { name: '34', uv: 70, pv: 258 },
  { name: '35', uv: -25, pv: 359 },
  { name: '36', uv: -59, pv: 192 },
  { name: '37', uv: -63, pv: 464 },
  { name: '38', uv: -91, pv: -2 },
  { name: '39', uv: -66, pv: 154 },
  { name: '40', uv: -50, pv: 186 },
];

const data7 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data6 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data8 = [
  { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
  { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
  { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
  { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
  { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
];

const data9 = [
  { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
];

const data10 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data11 = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class RechartsScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Recharts</title>
        </Helmet>
        <PageTitle>Recharts</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Simple Line Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <LineChart
                    data={data}
                    margin={{ right: 10, left: -10 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
                    <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                  </LineChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Synchronized Line Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={3 / 1}>
                  <LineChart
                    data={data2}
                    syncId='anyId'
                    margin={{ right: 10, left: -10 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                  </LineChart>
                </ResponsiveContainer>
                <p className='mY-30'>Maybe some other content</p>
                <ResponsiveContainer width='100%' aspect={3 / 1}>
                  <LineChart
                    data={data2}
                    syncId='anyId'
                    margin={{ right: 10, left: -10 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Brush />
                  </LineChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Simple Bar Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <BarChart
                    data={data3}
                    margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#8884d8' />
                    <Bar dataKey='uv' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Stacked Bar Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <BarChart
                    data={data4}
                    margin={{ top: 20, right: 10, left: -10, bottom: 5 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' stackId='a' fill='#8884d8' />
                    <Bar dataKey='uv' stackId='a' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Bar Chart With Brush'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <BarChart
                    data={data5}
                    margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke='#000' />
                    <Brush dataKey='name' height={30} stroke='#8884d8' />
                    <Bar dataKey='pv' fill='#8884d8' />
                    <Bar dataKey='uv' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Simple Area Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <AreaChart
                    data={data6}
                    margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                  </AreaChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Stacked Area Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <AreaChart
                    data={data7}
                    margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Area type='monotone' dataKey='uv' stackId='1' stroke='#8884d8' fill='#8884d8' />
                    <Area type='monotone' dataKey='pv' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
                    <Area type='monotone' dataKey='amt' stackId='1' stroke='#ffc658' fill='#ffc658' />
                  </AreaChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Line Bar Area Composed Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <ComposedChart
                    data={data8}
                    margin={{ top: 0, right: 10, bottom: 20, left: -10 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                  </ComposedChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Simple Scatter Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={2 / 1}>
                  <ScatterChart
                    margin={{ top: 0, right: 10, bottom: 0, left: -10 }}
                  >
                    <XAxis dataKey={'x'} name='stature' unit='cm' />
                    <YAxis dataKey={'y'} name='weight' unit='kg' />
                    <CartesianGrid />
                    <Scatter name='A school' data={data9} fill='#8884d8' />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  </ScatterChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Pie Chart With Customized Label'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={1 / 1}>
                  <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                    <Pie
                      dataKey='value'
                      data={data10}
                      cx={300}
                      cy={200}
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill='#8884d8'
                    >
                      {
                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                      }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Radar Chart'
              subtitle=''
            >
              <ContentWrapper>
                <ResponsiveContainer width='100%' aspect={1 / 1}>
                  <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    data={data11}
                  >
                    <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
                    <Radar name='Lily' dataKey='B' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.6} />
                    <PolarGrid />
                    <Legend />
                    <PolarAngleAxis dataKey='subject' />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  </RadarChart>
                </ResponsiveContainer>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
