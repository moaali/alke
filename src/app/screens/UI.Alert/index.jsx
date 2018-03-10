import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Alert from 'components/UI/Alert';
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

const onClose = function (e) {
  return e;
};

export default class AlertScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Alert</title>
        </Helmet>
        <PageTitle>Alert</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The simplest usage for short messages.'
            >
              <ContentWrapper>
                <Alert message='Success Text' type='success' />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='More types'
              subtitle='There are 4 types of Alert: success, info, warning, error.'
            >
              <ContentWrapper>
                <Alert message='Success Text' type='success' />
                <br />
                <Alert message='Info Text' type='info' />
                <br />
                <Alert message='Warning Text' type='warning' />
                <br />
                <Alert message='Error Text' type='error' />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Closable'
              subtitle='To show close button.'
            >
              <ContentWrapper>
                <Alert
                  message='Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text'
                  type='warning'
                  closable
                  onClose={onClose}
                />
                <br />
                <Alert
                  message='Error Text'
                  description='Error Description Error Description Error Description Error Description Error Description Error Description'
                  type='error'
                  closable
                  onClose={onClose}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Description'
              subtitle='Additional description for alert message.'
            >
              <ContentWrapper>
                <Alert
                  message='Success Text'
                  description='Success Description Success Description Success Description'
                  type='success'
                />
                <br />
                <Alert
                  message='Info Text'
                  description='Info Description Info Description Info Description Info Description'
                  type='info'
                />
                <br />
                <Alert
                  message='Warning Text'
                  description='Warning Description Warning Description Warning Description Warning Description'
                  type='warning'
                />
                <br />
                <Alert
                  message='Error Text'
                  description='Error Description Error Description Error Description Error Description'
                  type='error'
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Icon'
              subtitle='Decent icon make information more clear and more friendly.'
            >
              <ContentWrapper>
                <Alert message='Success Tips' type='success' showIcon />
                <br />
                <Alert message='Informational Notes' type='info' showIcon />
                <br />
                <Alert message='Warning' type='warning' showIcon />
                <br />
                <Alert message='Error' type='error' showIcon />
                <br />
                <Alert
                  message='success tips'
                  description='Detailed description and advices about successful copywriting.'
                  type='success'
                  showIcon
                />
                <br />
                <Alert
                  message='Informational Notes'
                  description='Additional description and informations about copywriting.'
                  type='info'
                  showIcon
                />
                <br />
                <Alert
                  message='Warning'
                  description='This is a warning notice about copywriting.'
                  type='warning'
                  showIcon
                />
                <br />
                <Alert
                  message='Error'
                  description='This is an error message about copywriting.'
                  type='error'
                  showIcon
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Customized Close Text'
              subtitle='Replace the default icon with customized text.'
            >
              <ContentWrapper>
                <Alert message='Info Text' type='info' closeText='Close Now' />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
