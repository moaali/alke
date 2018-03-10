import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';

import {
  Transfer,
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

import './index.less';

const masonryOptions = {
  columnWidth     : '.MasonrySizer',
  itemSelector    : '.MasonryItem',
  percentPosition : true,
};

const mockData = [];

for (let i = 0; i < 20; i++) {
  mockData.push({
    key         : i.toString(),
    title       : `content${i + 1}`,
    description : `description of content${i + 1}`,
    disabled    : i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

export default class TransferScreen extends Component {
  state = {
    targetKeys,
    selectedKeys  : [],
    mockData      : [],
    targetKeysAlt : [],
  }

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const keys = [];
    const data = [];
    for (let i = 0; i < 20; i++) {
      const info = {
        key         : i.toString(),
        title       : `content${i + 1}`,
        description : `description of content${i + 1}`,
        chosen      : Math.random() * 2 > 1,
      };
      if (info.chosen) {
        keys.push(info.key);
      }
      data.push(info);
    }
    this.setState({
      mockData      : data,
      targetKeysAlt :  keys,
    });
  }

  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  }

  handleChangeAlt = (keys) => {
    this.setState({ targetKeysAlt: keys });
  }

  handleChange = (nextTargetKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Transfer</title>
        </Helmet>
        <PageTitle>Transfer</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The most basic usage of Transfer involves providing the source data and target keys arrays, plus the rendering and some callback functions.'
            >
              <ContentWrapper>
                <Transfer
                  dataSource={mockData}
                  titles={['Source', 'Target']}
                  targetKeys={this.state.targetKeys}
                  selectedKeys={this.state.selectedKeys}
                  onChange={this.handleChange}
                  onSelectChange={this.handleSelectChange}
                  render={item => item.title}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Search'
              subtitle='Transfer with a search box.'
            >
              <ContentWrapper>
                <Transfer
                  dataSource={this.state.mockData}
                  showSearch
                  filterOption={this.filterOption}
                  targetKeys={this.state.targetKeys}
                  onChange={this.handleChange}
                  render={item => item.title}
                />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
