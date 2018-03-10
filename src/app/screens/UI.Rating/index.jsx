import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';
import Rate from 'components/UI/Rate';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class RateScreen extends Component {
  state = {
    value: 3,
    count: null,
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Rate</title>
        </Helmet>
        <PageTitle>Rate</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The simplest usage.'
            >
              <ContentWrapper>
                <Rate />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Half star'
              subtitle='Support select half star.'
            >
              <ContentWrapper>
                <Rate allowHalf defaultValue={2.5} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Show copywriting'
              subtitle='Add copywriting in rate components.'
            >
              <ContentWrapper>
                <span>
                  <Rate onChange={this.handleChange} value={this.state.value} />
                  {this.state.value && <span className='ant-rate-text'>{this.state.value} stars</span>}
                </span>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Read only'
              subtitle='Read only, canot use mouse to interact.'
            >
              <ContentWrapper>
                <Rate disabled defaultValue={2} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Other Character'
              subtitle='Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.'
            >
              <ContentWrapper>
                <Rate character={<Icon type='heart' />} allowHalf />
                <br />
                <Rate character='A' allowHalf style={{ fontSize: 36 }} />
                <br />
                <Rate character='好' allowHalf />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
