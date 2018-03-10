import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col, Icon, Switch } from 'antd';
import Button, { ButtonGroup } from 'components/UI/Button';
import Uppy from 'components/UI/Uppy';
import config from 'shared/config/uppy';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';


const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class UppyScreen extends Component {
  componentDidMount() {
    Uppy(config);
  }

  @autobind
  onSuccess(fileList) {
    console.log(fileList);
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Uppy</title>
        </Helmet>
        <PageTitle>Uppy</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title=''
              subtitle=''
            >
              <ContentWrapper>
                <div className='d-f ai-c jc-c'>
                  <div id='uppyHolder' />
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
