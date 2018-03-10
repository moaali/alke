import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';

import {
  Radio,
  Switch,
  Form,
  Table,
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

import './index.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const masonryOptions = {
  columnWidth     : '.MasonrySizer',
  itemSelector    : '.MasonryItem',
  percentPosition : true,
};

const columnsAlt = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const dataAlt = [];

for (let i = 0; i < 100; i++) {
  dataAlt.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const columns = [{
  title     : 'Name',
  dataIndex : 'name',
  key       : 'name',
  width     : 150,
  render    : text => <a>{text}</a>,
}, {
  title     : 'Age',
  dataIndex : 'age',
  key       : 'age',
  width     : 70,
}, {
  title     : 'Address',
  dataIndex : 'address',
  key       : 'address',
}, {
  title  : 'Action',
  key    : 'action',
  width  : 360,
  render : (text, record) => (
    <span>
      <a>Action 一 {record.name}</a>
      <span className='ant-divider' />
      <a>Delete</a>
      <span className='ant-divider' />
      <a className='ant-dropdown-link'>
        More actions <Icon type='down' />
      </a>
    </span>
  ),
}];

const data = [];

for (let i = 1; i <= 10; i++) {
  data.push({
    key         : i,
    name        : 'John Brown',
    age         : `${i}2`,
    address     : `New York No. ${i} Lake Park`,
    description :  `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

export default class TablesScreen extends Component {
  state = {
    bordered     : false,
    loading      : false,
    pagination   : true,
    size         : 'default',
    rowSelection : {},
    scroll       : undefined,
    expandedRowRender,
    title,
    showHeader,
    footer,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : false });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    console.log(enable);
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Tables</title>
        </Helmet>
        <PageTitle>Tables</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Dynamic Settings'
              subtitle='Select different settings to see the result.'
            >
              <ContentWrapper>
                <div className='components-table-demo-control-bar'>
                  <Form layout='inline'>
                    <FormItem label='Bordered'>
                      <Switch
                        checked={this.state.bordered}
                        onChange={this.handleToggle('bordered')}
                      />
                    </FormItem>
                    <FormItem label='loading'>
                      <Switch
                        checked={this.state.loading}
                        onChange={this.handleToggle('loading')}
                      />
                    </FormItem>
                    <FormItem label='Pagination'>
                      <Switch
                        checked={this.state.pagination}
                        onChange={this.handleToggle('pagination')}
                      />
                    </FormItem>
                    <FormItem label='Title'>
                      <Switch
                        checked={!!this.state.title}
                        onChange={this.handleTitleChange}
                      />
                    </FormItem>
                    <FormItem label='Column Header'>
                      <Switch
                        checked={!!this.state.showHeader}
                        onChange={this.handleHeaderChange}
                      />
                    </FormItem>
                    <FormItem label='Footer'>
                      <Switch
                        checked={!!this.state.footer}
                        onChange={this.handleFooterChange}
                      />
                    </FormItem>
                    <FormItem label='Expandable'>
                      <Switch
                        checked={!!this.state.expandedRowRender}
                        onChange={this.handleExpandChange}
                      />
                    </FormItem>
                    <FormItem label='Checkbox'>
                      <Switch
                        checked={!!this.state.rowSelection}
                        onChange={this.handleRowSelectionChange}
                      />
                    </FormItem>
                    <FormItem label='Fixed Header'>
                      <Switch
                        checked={!!this.state.scroll}
                        onChange={this.handleScollChange}
                      />
                    </FormItem>
                    <FormItem label='Size'>
                      <RadioGroup size='default' value={this.state.size} onChange={this.handleSizeChange}>
                        <RadioButton value='default'>Default</RadioButton>
                        <RadioButton value='middle'>Middle</RadioButton>
                        <RadioButton value='small'>Small</RadioButton>
                      </RadioGroup>
                    </FormItem>
                  </Form>
                </div>
                <Table {...this.state} columns={columns} dataSource={data} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Fixed Columns and Header'
              subtitle='A Solution for displaying large amounts of data with long columns.'
            >
              <ContentWrapper>
                <Table columns={columnsAlt} dataSource={dataAlt} scroll={{ x: 1500, y: 300 }} />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
