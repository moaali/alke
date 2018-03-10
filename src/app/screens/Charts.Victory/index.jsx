import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';

import {
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

import {
  CustomTooltipLabels,
  StackedPolarBars,
  VictoryArea,
  VictoryPortal,
} from './components';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class VictoryChartsScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Victory Charts</title>
        </Helmet>
        <PageTitle>Victory Charts</PageTitle>
        <Masonry className='Masonry' options={masonryOptions}>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Custom Tooltip Labels'
            >
              <ContentWrapper>
                <CustomTooltipLabels />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Stacked Polar Bars'
            >
              <ContentWrapper>
                <StackedPolarBars />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Victory Area'
            >
              <ContentWrapper>
                <VictoryArea />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Victory Portal'
            >
              <ContentWrapper>
                <VictoryPortal />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
