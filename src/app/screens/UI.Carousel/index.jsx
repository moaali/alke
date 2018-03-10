import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Carousel from 'components/UI/Carousel';
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

export default class CarouselScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Carousel</title>
        </Helmet>
        <PageTitle>Carousel</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Basic usage.'
            >
              <ContentWrapper>
                <Carousel>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Vertical'
              subtitle='Vertical pagination.'
            >
              <ContentWrapper>
                <Carousel vertical>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Fade in'
              subtitle='Slides use fade for transition.'
            >
              <ContentWrapper>
                <Carousel effect='fade'>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Scroll automatically'
              subtitle='Timing of scrolling to the next card/picture'
            >
              <ContentWrapper>
                <Carousel autoplay>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
