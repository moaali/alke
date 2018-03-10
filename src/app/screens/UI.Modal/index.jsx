import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col } from 'antd';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
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

export default class ModalScreen extends Component {
  state = {
    visible: false,
    visibleAsync: false,
    ModalText: 'Content of the modal',
  }

  @autobind
  showModal() {
    this.setState({
      visible: true,
    });
  }

  @autobind
  showModalAsync() {
    this.setState({
      visibleAsync: true,
    });
  }

  @autobind
  handleOk() {
    this.setState({
      visible: false,
    });
  }

  @autobind
  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  @autobind
  handleOkAsync() {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });

    setTimeout(() => {
      this.setState({
        visibleAsync: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  @autobind
  handleCancelAsync() {
    this.setState({
      visibleAsync: false,
    });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Modal</title>
        </Helmet>
        <PageTitle>Modal</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Basic modal.'
            >
              <ContentWrapper>
                <Button type='primary' onClick={this.showModal}>Open</Button>
                <Modal
                  title='Basic Modal'
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Asynchronously close'
              subtitle='Asynchronously close a modal dialog when a user clicked OK button, for example, you can use this pattern when you submit a form.'
            >
              <ContentWrapper>
                <Button type='primary' onClick={this.showModalAsync}>Open</Button>
                <Modal
                  title='Title'
                  visible={this.state.visibleAsync}
                  onOk={this.handleOkAsync}
                  confirmLoading={this.state.confirmLoading}
                  onCancel={this.handleCancelAsync}
                >
                  <p>{this.state.ModalText}</p>
                </Modal>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
