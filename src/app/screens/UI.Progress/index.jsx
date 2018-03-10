import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Progress from 'components/UI/Progress';
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

export default class ProgressScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Progress</title>
        </Helmet>
        <PageTitle>Progress</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Progress bar'
              subtitle='A standard progress bar.'
            >
              <ContentWrapper>
                <Progress percent={30} />
                <br />
                <Progress percent={50} status='active' />
                <br />
                <Progress percent={70} status='exception' />
                <br />
                <Progress percent={100} />
                <br />
                <Progress percent={50} showInfo={false} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Circular progress bar'
              subtitle='A circular progress bar.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <Progress type='circle' percent={75} />
                  </div>
                  <div className='peer pR-15'>
                    <Progress type='circle' percent={70} status='exception' />
                  </div>
                  <div className='peer'>
                    <Progress type='circle' percent={100} />
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Mini size progress bar'
              subtitle='Appropriate for a narrow area.'
            >
              <ContentWrapper>
                <Progress percent={30} strokeWidth={5} />
                <Progress percent={50} strokeWidth={5} status='active' />
                <Progress percent={70} strokeWidth={5} status='exception' />
                <Progress percent={100} strokeWidth={5} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Mini size circular progress bar'
              subtitle='A smaller circular progress bar.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'><Progress type='circle' percent={30} width={80} /></div>
                  <div className='peer pR-15'><Progress type='circle' percent={70} width={80} status='exception' /></div>
                  <div className='peer'><Progress type='circle' percent={100} width={80} /></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
