import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';
import Timeline from 'components/UI/Timeline';
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

export default class TimelineScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Timeline</title>
        </Helmet>
        <PageTitle>Timeline</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Basic timeline.'
            >
              <ContentWrapper>
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Color'
              subtitle='Set the color of circles. green means completed or success status, red means warning or error, and blue means ongoing or other default status.'
            >
              <ContentWrapper>
                <Timeline>
                  <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color='red'>
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Last node'
              subtitle='When the timeline is incomplete and ongoing, put a ghost node at last. set pending={true} or pending={a React Element}。'
            >
              <ContentWrapper>
                <Timeline pending={<a>See more</a>}>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Custom'
              subtitle='Set a node as an icon or other custom element.'
            >
              <ContentWrapper>
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<Icon type='clock-circle-o' style={{ fontSize: '16px' }} />} color='red'>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
