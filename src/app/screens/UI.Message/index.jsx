import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Button from 'components/UI/Button';
import Message from 'components/UI/Message';
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

const info = () => {
  Message.info('This is a normal message');
};

const success = () => {
  Message.success('This is a message of success');
};

const error = () => {
  Message.error('This is a message of error');
};

const warning = () => {
  Message.warning('This is message of warning');
};

const custom = () => {
  Message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

export default class MessageScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Message</title>
        </Helmet>
        <PageTitle>Message</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Normal prompt'
              subtitle='Normal messages as feedbacks.'
            >
              <ContentWrapper>
                <Button type='primary' onClick={info}>Display normal message</Button>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Other types of message'
              subtitle='Messages of success, error and warning types.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <Button onClick={success}>Success</Button>
                  </div>
                  <div className='peer pR-15'>
                    <Button onClick={error}>Error</Button>
                  </div>
                  <div className='peer'>
                    <Button onClick={warning}>Warning</Button>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Customize duration'
              subtitle='Customize message display duration from default 1.5s to 10s.'
            >
              <ContentWrapper>
                <Button onClick={custom}>Customized display duration</Button>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
