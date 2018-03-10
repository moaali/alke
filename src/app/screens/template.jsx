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

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class BadgeScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Badge</title>
        </Helmet>
        <PageTitle>Carousel</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' md={12} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title=''
              subtitle=''
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-20'></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
