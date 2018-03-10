import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col, Icon } from 'antd';
import Button from 'components/UI/Button';
import AutoComplete from 'components/UI/AutoComplete';
import Input from 'components/UI/Input';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const { TextArea } = Input;
const Option = AutoComplete.Option;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {item.category}
      </a>
      区块中
      <span className='global-search-item-count'>约 {item.count} 个结果</span>
    </Option>
  );
}

function onSelect(value) {
  return value;
}

export default class AutocompleteScreen extends Component {
  state = {
    dataSource: [],
    dataSourceCustomInput: [],
    dataSourceAlt: [],
    result: [],
  }

  @autobind
  handleSearch(value) {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  @autobind
  handleSearchCustomized(value) {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  @autobind
  handleSearchCustomInput(value) {
    this.setState({
      dataSourceCustomInput: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleSearchAlt(value) {
    this.setState({
      dataSourceAlt: value ? searchResult(value) : [],
    });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Autocomplete</title>
        </Helmet>
        <PageTitle>Autocomplete</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic Usage'
              subtitle='Basic Usage, set datasource of autocomplete with dataSource property.'
            >
              <ContentWrapper>
                <AutoComplete
                  dataSource={this.state.dataSource}
                  style={{ width: 200 }}
                  onSelect={onSelect}
                  onSearch={this.handleSearch}
                  placeholder='input here'
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Customized'
              subtitle='You could pass AutoComplete.Option as children of AutoComplete, instead of using dataSource。'
            >
              <ContentWrapper>
                <AutoComplete
                  style={{ width: 200 }}
                  onSearch={this.handleSearchCustomized}
                  placeholder='input here'
                >
                  {
                    this.state.result.map((email) => {
                      return <Option key={email}>{email}</Option>;
                    })
                  }
                </AutoComplete>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Customize Input Component'
              subtitle='Customize Input Component'
            >
              <ContentWrapper>
                <AutoComplete
                  dataSource={this.state.dataSourceCustomInput}
                  style={{ width: 200, height: 50 }}
                  onSelect={onSelect}
                  onSearch={this.handleSearchCustomInput}
                  placeholder='input here'
                >
                  <TextArea style={{ height: 50 }} />
                </AutoComplete>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Lookup-Patterns - Uncertain Category'
              subtitle='Demonstration of Lookup Patterns: Uncertain Category. Basic Usage, set datasource of autocomplete with dataSource property.'
            >
              <ContentWrapper>
                <AutoComplete
                  className='global-search'
                  size='large'
                  style={{ width: '100%' }}
                  dataSource={this.state.dataSourceAlt.map(renderOption)}
                  onSelect={onSelect}
                  onSearch={this.handleSearchAlt}
                  placeholder='input here'
                  optionLabelProp='text'
                >
                  <Input
                    suffix={(
                      <Button className='search-btn' size='large' type='primary'>
                        <Icon type='search' />
                      </Button>
                    )}
                  />
                </AutoComplete>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
