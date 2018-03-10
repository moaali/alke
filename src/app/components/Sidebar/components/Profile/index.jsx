import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Menu } from 'antd';
import { Icon, Dropdown } from 'components';
import './index.less';

const
  MENU = (
    <Menu>
      <Menu.Item>
        <a rel='noopener noreferrer'>Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a rel='noopener noreferrer'>Settings</a>
      </Menu.Item>
      <Menu.Item>
        <a rel='noopener noreferrer'>Logout</a>
      </Menu.Item>
    </Menu>
  );

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  @autobind
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div id='SideBarProfile' className='c-White peers peers-nw peers-sp peers-c'>
        <div className='peers peers-nw peers-c peer-greed'>
          <div id='AvatarBox' className='peer ov-h mR-20'>
            <img
              className='bdrs-50'
              src='https://s3.amazonaws.com/uifaces/faces/twitter/nyancecom/128.jpg'
              alt={'John'}
            />
          </div>
          <div className='peer'>
            <h4 className='c-White'>Hi, John</h4>
            <small>
              <span className='userActivity online mR-5' />
              <span className='op-05'>Online</span>
            </small>
          </div>
        </div>
        <div className='peer'>
          <Dropdown overlay={MENU}>
            <div className='pos-r'>
              <Icon className='fz-large cur-p' type='setting' />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
