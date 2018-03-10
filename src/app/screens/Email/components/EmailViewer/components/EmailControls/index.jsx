import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import classNames from 'classnames';
import { Button } from 'antd';
import { Popconfirm, Notification, Popover, Icon } from 'components';
import './index.less';

const ButtonGroup = Button.Group;

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailControls extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
    this.AppStore = this.props.AppStore;
  }

  @autobind
  handleDeleteConfirm() {
    this.store.deleteEmail(this.store.getCurrentEmail());
  }

  @autobind
  handleMove() {
    this.store.deleteEmail(this.store.getCurrentEmail());
  }

  @autobind
  handlePrev() {
    this.store.setCurrentEmail(this.store.getPrevToCurrent());
  }

  @autobind
  handleNext() {
    this.store.setCurrentEmail(this.store.getNextToCurrent());
  }

  @autobind
  handleInboxClick() {
    this.store.toggleViewer();
  }

  render() {
    const view = this.AppStore.getView();
    const movePopoverContent = (
      <ul className='emailCtrlList'>
        {
          this.store.getBuckets().map(bucket => (
            <li
              onClick={this.handleMove}
              key={bucket}
              className='pY-5'
            >
              <a>
                {bucket}
              </a>
            </li>
          ))
        }
      </ul>
    );

    const labelPopoverContent = (
      <ul className='emailCtrlList'>
        {
          this.store.getLabels().map(label => (
            <li
              onClick={this.handleMove}
              key={label}
              className='pY-5'
            >
              <a>
                {label}
              </a>
            </li>
          ))
        }
      </ul>
    );

    return (
      <div className='peers peers-nw- peers-c bdB emailTop bdB'>
        <div className='peer'>
          <Button
            type='primary'
            id='inboxLinkBtn'
            className={
              classNames('mR-15', {
                'd-n': view !== 'MobileView',
              })
            }
            onClick={this.handleInboxClick}
          >
            Inbox
          </Button>
        </div>
        <div className='peers peer-greed'>
          <div className='peer mR-15'>
            <ButtonGroup type='ghost'>
              <Button
                className='emailCtrlBtn mailArchive'
                onClick={() => {
                  Notification('success', 'Email Archived');
                }}
              >
                <Icon type='database' />
              </Button>

              <Button
                className='emailCtrlBtn mailReport'
                onClick={() => {
                  Notification('success', 'Reported as Spam');
                }}
              >
                <Icon type='close-circle' />
              </Button>

              <Popconfirm
                title={'You are about to delete this email!'}
                okText='Proceed'
                cancelText='Cancel'
                onConfirm={this.handleDeleteConfirm}
              >
                <Button  className='emailCtrlBtn mailDelete'>
                  <Icon type='delete' />
                </Button>
              </Popconfirm>
            </ButtonGroup>
          </div>
          <div className='peer'>
            <ButtonGroup type='ghost'>
              <Popover
                title={'Move Email'}
                content={movePopoverContent}
                overlayClassName='mailMoveDropdown'
              >
                <Button  className='emailCtrlBtn mailArchive'>
                  <Icon type='folder' />
                </Button>
              </Popover>
              <Popover
                title={'Choose a Label'}
                content={labelPopoverContent}
                overlayClassName='mailMoveDropdown'
              >
                <Button  className='emailCtrlBtn mailReport'>
                  <Icon type='tag' />
                </Button>
              </Popover>
            </ButtonGroup>
          </div>
        </div>

        <div className='peers peers-nw peers-c'>
          {
            do {
              if (this.store.getPrevToCurrent()) {
                <div className='peer mR-5'>
                  <Button type='ghost' onClick={this.handlePrev} icon='left' className='emailCtrlBtn' />
                </div>
              }
            }
          }

          {
            do {
              if (this.store.getNextToCurrent()) {
                <div className='peer'>
                  <Button type='ghost' onClick={this.handleNext} icon='right' className='emailCtrlBtn' />
                </div>
              }
            }
          }
        </div>
      </div>
    );
  }
}
