import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';

import {
  Radio,
  Button,
  Tabs,
  Select,
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

import './index.less';

const Option     = Select.Option;
const TabPane    = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

const masonryOptions = {
  columnWidth     : '.MasonrySizer',
  itemSelector    : '.MasonryItem',
  percentPosition : true,
};

export default class TabsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode        : 'top',
      tabPosition : 'top',
    };
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Tabs</title>
        </Helmet>
        <PageTitle>Tabs</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Default activate first tab.'
            >
              <ContentWrapper>
                <Tabs defaultActiveKey='1'>
                  <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
                  <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Content of Tab Pane 3</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Disabled'
              subtitle='Disabled a tab.'
            >
              <ContentWrapper>
                <Tabs defaultActiveKey='1'>
                  <TabPane tab='Tab 1' key='1'>Tab 1</TabPane>
                  <TabPane tab='Tab 2' disabled key='2'>Tab 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Tab 3</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Icon'
              subtitle='The Tab with Icon.'
            >
              <ContentWrapper>
                <Tabs defaultActiveKey='2'>
                  <TabPane tab={<span><Icon type='apple' />Tab 1</span>} key='1'>
                    Tab 1
                  </TabPane>
                  <TabPane tab={<span><Icon type='android' />Tab 2</span>} key='2'>
                    Tab 2
                  </TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Slide'
              subtitle='Tab can be slide to left or right(up or down), which is used for a lot of tabs.'
            >
              <ContentWrapper>
                <Radio.Group
                  onChange={this.handleModeChange}
                  value={this.state.mode}
                  style={{ marginBottom: 8 }}
                >
                  <Radio.Button value='top'>Horizontal</Radio.Button>
                  <Radio.Button value='left'>Vertical</Radio.Button>
                </Radio.Group>
                <Tabs
                  defaultActiveKey='1'
                  tabPosition={this.state.mode}
                  style={{ height: 220 }}
                >
                  <TabPane tab='Tab 1' key='1'>Content of tab 1</TabPane>
                  <TabPane tab='Tab 2' key='2'>Content of tab 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Content of tab 3</TabPane>
                  <TabPane tab='Tab 4' key='4'>Content of tab 4</TabPane>
                  <TabPane tab='Tab 5' key='5'>Content of tab 5</TabPane>
                  <TabPane tab='Tab 6' key='6'>Content of tab 6</TabPane>
                  <TabPane tab='Tab 7' key='7'>Content of tab 7</TabPane>
                  <TabPane tab='Tab 8' key='8'>Content of tab 8</TabPane>
                  <TabPane tab='Tab 9' key='9'>Content of tab 9</TabPane>
                  <TabPane tab='Tab 10' key='10'>Content of tab 10</TabPane>
                  <TabPane tab='Tab 11' key='11'>Content of tab 11</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Extra content'
              subtitle='You can add extra actions to the right of Tabs.'
            >
              <ContentWrapper>
                <Tabs tabBarExtraContent={operations}>
                  <TabPane tab='Tab 1' key='1'>Content of tab 1</TabPane>
                  <TabPane tab='Tab 2' key='2'>Content of tab 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Content of tab 3</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Mini tab'
              subtitle='Small size can be used in Modal.'
            >
              <ContentWrapper>
                <Tabs defaultActiveKey='2' size='small'>
                  <TabPane tab='Tab 1' key='1'>Content of tab 1</TabPane>
                  <TabPane tab='Tab 2' key='2'>Content of tab 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Content of tab 3</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Position'
              subtitle='Tabs position: left, right, top or bottom.'
            >
              <ContentWrapper>
                <div style={{ marginBottom: 16 }}>
                  Tab position：
                  <Select
                    value={this.state.tabPosition}
                    onChange={this.changeTabPosition}
                    dropdownMatchSelectWidth={false}
                  >
                    <Option value='top'>top</Option>
                    <Option value='bottom'>bottom</Option>
                    <Option value='left'>left</Option>
                    <Option value='right'>right</Option>
                  </Select>
                </div>
                <Tabs tabPosition={this.state.tabPosition}>
                  <TabPane tab='Tab 1' key='1'>Content of Tab 1</TabPane>
                  <TabPane tab='Tab 2' key='2'>Content of Tab 2</TabPane>
                  <TabPane tab='Tab 3' key='3'>Content of Tab 3</TabPane>
                </Tabs>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
