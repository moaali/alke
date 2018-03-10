import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col, Icon, Switch } from 'antd';
import Button, { ButtonGroup } from 'components/UI/Button';
import Dropzone from 'components/UI/Dropzone';
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

const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  method: true,
  showFiletypeIcon: true,
  uploadMultiple: false,
  maxFilesize: 2,
  maxFiles: 2,
  dictMaxFilesExceeded: 'You can only upload upto 2 images',
  dictRemoveFile: 'Delete',
  dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
  postUrl: 'no-url',
};

const djsConfig = { autoProcessQueue: false };

const eventHandlers = {
  addedfile: file => Notify('success', `${file.name} added`),
  success: file =>
    Notify('success', `${file.name} successfully uploaded`),
  error: error => Notify('error', 'Its a demo, you canont upload.'),
};

export default class DropzoneScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Dropzone</title>
        </Helmet>
        <PageTitle>Dropzone</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Dropzone'
              subtitle='Custom Dropzone'
            >
              <ContentWrapper>
                <Dropzone
                  config={componentConfig}
                  eventHandlers={eventHandlers}
                  djsConfig={djsConfig}
                />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
};
