import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon, Select, DatePicker, Cascader } from 'antd';
import Input from 'components/UI/Input';
import AutoComplete from 'components/UI/AutoComplete';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;
const { TextArea } = Input;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const selectBefore = (
  <Select defaultValue='Http://' style={{ width: 80 }}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com' style={{ width: 70 }}>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
);

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

export default class InputsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  state = {
    dataSource: [],
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  handleChange = (value) => {
    this.setState({
      dataSource: !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
      ],
    });
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type='close-circle' onClick={this.emitEmpty} /> : null;

    return (
      <LayoutContainer>
        <Helmet>
          <title>Inputs</title>
        </Helmet>
        <PageTitle>Inputs</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic usage'
              subtitle='Basic usage example.'
            >
              <ContentWrapper>
                <Input placeholder='Basic usage' />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Pre / Post tab'
              subtitle='Using pre & post tabs example.'
            >
              <ContentWrapper>
                <div style={{ marginBottom: 16 }}>
                  <Input addonBefore='Http://' addonAfter='.com' defaultValue='mysite' />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue='mysite' />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <Input addonAfter={<Icon type='setting' />} defaultValue='mysite' />
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Search box'
              subtitle='Example of creating a search box by grouping a standard input with a search button, added in 2.5.0.'
            >
              <ContentWrapper>
                <Search
                  placeholder='input search text'
                  style={{ width: 200 }}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Autosizing the height to fit the content'
              subtitle='autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust.'
            >
              <ContentWrapper>
                <TextArea placeholder='Autosize height based on content lines' autosize />
                <div style={{ margin: '24px 0' }} />
                <TextArea placeholder='Autosize height with minimum and maximum number of lines' autosize={{ minRows: 2, maxRows: 6 }} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='prefix and suffix'
              subtitle='Add prefix or suffix icons inside input.'
            >
              <ContentWrapper>
                <Input
                  placeholder='Enter your userName'
                  prefix={<Icon type='user' />}
                  suffix={suffix}
                  value={userName}
                  onChange={this.onChangeUserName}
                  ref={node => this.userNameInput = node}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Three sizes of Input'
              subtitle='There are three sizes of an Input box: large (32px)、default (28px) and small (22px).'
            >
              <ContentWrapper>
                <Input size='large' placeholder='large size' />
                <br />
                <br />
                <Input placeholder='default size' />
                <br />
                <br />
                <Input size='small' placeholder='small size' />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Input Group'
              subtitle='Input.Group example Note: You donot need Col to control the width in the compact mode.'
            >
              <ContentWrapper>
                <InputGroup size='large'>
                  <Col span={4}>
                    <Input defaultValue='0571' />
                  </Col>
                  <Col span={8}>
                    <Input defaultValue='26888888' />
                  </Col>
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Input style={{ width: '20%' }} defaultValue='0571' />
                  <Input style={{ width: '30%' }} defaultValue='26888888' />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select defaultValue='Zhejiang'>
                    <Option value='Zhejiang'>Zhejiang</Option>
                    <Option value='Jiangsu'>Jiangsu</Option>
                  </Select>
                  <Input style={{ width: '50%' }} defaultValue='Xihu District, Hangzhou' />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select defaultValue='Option1'>
                    <Option value='Option1'>Option1</Option>
                    <Option value='Option2'>Option2</Option>
                  </Select>
                  <Input style={{ width: '50%' }} defaultValue='input content' />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Input style={{ width: '50%' }} defaultValue='input content' />
                  <DatePicker />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select defaultValue='Option1-1'>
                    <Option value='Option1-1'>Option1-1</Option>
                    <Option value='Option1-2'>Option1-2</Option>
                  </Select>
                  <Select defaultValue='Option2-2'>
                    <Option value='Option2-1'>Option2-1</Option>
                    <Option value='Option2-2'>Option2-2</Option>
                  </Select>
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select defaultValue='1'>
                    <Option value='1'>Between</Option>
                    <Option value='2'>Except</Option>
                  </Select>
                  <Input style={{ width: 100, textAlign: 'center' }} placeholder='Minimum' />
                  <Input style={{ width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder='~' disabled />
                  <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder='Maximum' />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select defaultValue='Sign Up'>
                    <Option value='Sign Up'>Sign Up</Option>
                    <Option value='Sign In'>Sign In</Option>
                  </Select>
                  <AutoComplete
                    dataSource={this.state.dataSource}
                    style={{ width: 200 }}
                    onChange={this.handleChange}
                    placeholder='Email'
                  />
                </InputGroup>
                <br />
                <InputGroup compact>
                  <Select style={{ width: '30%' }} defaultValue='Home'>
                    <Option value='Home'>Home</Option>
                    <Option value='Company'>Company</Option>
                  </Select>
                  <Cascader style={{ width: '70%' }} options={options} placeholder='Select Address' />
                </InputGroup>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='TextArea'
              subtitle='For multi-line input.'
            >
              <ContentWrapper>
                <TextArea rows={4} />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
