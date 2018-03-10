import React, { Component } from 'react';
import faker from 'faker';
import moment from 'moment';
import { reduce } from 'lodash';
import { MdEmail, MdDelete, MdEdit } from 'react-icons/lib/md';

import {
  Radio,
  Switch,
  Form,
  Icon,
  Table,
  PageTitle,
  Rate,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left' },
  {
    title: 'Activity',
    key: '4',
    width: 80,
    fixed: 'left',
    render: (text, record) => {
      const activity = record.activity;

      if (activity === 'Active') {
        return (
          <span
            style={{ width: '50px' }}
            className='d-ib va-m p-5 lh-1 bdrs-2 c-White ta-c bgc-LimeGreen'
          >
            {activity}
          </span>
        );
      }

      if (activity === 'Busy') {
        return (
          <span
            style={{ width: '50px' }}
            className='d-ib va-m p-5 lh-1 bdrs-2 c-White ta-c bgc-Orange'
          >
            {activity}
          </span>
        );
      }

      if (activity === 'Offline') {
        return (
          <span
            style={{ width: '50px' }}
            className='d-ib va-m p-5 lh-1 bdrs-2 c-White ta-c bgc-Red'
          >
            {activity}
          </span>
        );
      }
    },
  },
  {
    title: 'Reputation',
    key: '6',
    width: 200,
    render: (text, record) => (
      <Rate disabled defaultValue={record.rep} />
    ),
  },
  { title: 'Age', width: 40, dataIndex: 'age', key: 'age' },
  { title: 'City', dataIndex: 'city', key: '1', width: 150 },
  { title: 'Zip Code', dataIndex: 'zip', key: '2', width: 100 },
  { title: 'Email', dataIndex: 'email', key: '3', width: 250 },
  { title: 'Registeration Date', dataIndex: 'registerDate', key: '5', width: 150 },
  { title: 'Phone', dataIndex: 'phone', key: '7', width: 150 },
  { title: 'Job', dataIndex: 'job', key: '8', width: 300 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: text => (
      <div className='peers peers-c peers-nw'>
        <a className='peer c-LimeGreen mR-10' style={{ fontSize: '18px' }}>
          <MdEmail />
        </a>
        <a className='peer c-Orange mR-10' style={{ fontSize: '18px' }}>
          <MdEdit />
        </a>
        <a className='peer c-Red mR-10' style={{ fontSize: '18px' }}>
          <MdDelete />
        </a>
      </div>
    ),
  },
];

const tableWidth = reduce(columns, (sum, row) => sum + row.width, 0) + 62;

const data = [];
const activity = ['Active', 'Busy', 'Offline'];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: faker.name.findName(),
    age: faker.random.number(50),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    email: faker.internet.email(),
    activity: faker.random.arrayElement(activity),
    registerDate: moment(faker.date.recent(60)).format('MMM DD, YYYY'),
    rep: faker.random.number(5),
    phone: faker.phone.phoneNumber(),
    job: faker.name.jobTitle(),
  });
}

export default class TablesScreen extends Component {
  render() {
    return (
      <Table
        rowSelection={{}}
        bordered={true}
        size='small'
        columns={columns}
        dataSource={data}
        scroll={{ x: tableWidth, y: 500 }}
      />
    );
  }
}
