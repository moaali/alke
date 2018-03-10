import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col, Icon, Switch, notification } from 'antd';
import Button, { ButtonGroup } from 'components/UI/Button';
import Notify from 'components/UI/Notification';
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

const openNotification = () => {
  Notify(
    'info',
    'Notification Title',
    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  );
};

const openNotificationAlt = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default class NotifyScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Notify</title>
        </Helmet>
        <PageTitle>Notify</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The simplest usage that close the notification box after 4.5s.'
            >
              <ContentWrapper>
                <Button type="primary" onClick={openNotification}>Open the notification box</Button>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Duration after which the notification box is closed'
              subtitle='Duration can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.'
            >
              <ContentWrapper>
                <Button type="primary" onClick={openNotificationAlt}>Open the notification box</Button>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Notification with icon'
              subtitle='A notification box with a icon at the left side.'
            >
              <ContentWrapper>
                <div className="peers">
                  <div className="peer pR-15"><Button onClick={() => openNotificationWithIcon('success')}>Success</Button></div>
                  <div className="peer pR-15"><Button onClick={() => openNotificationWithIcon('info')}>Info</Button></div>
                  <div className="peer pR-15"><Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button></div>
                  <div className="peer"><Button onClick={() => openNotificationWithIcon('error')}>Error</Button></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
