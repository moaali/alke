import React, { Component } from 'react';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Profile, MenuLinks, SidebarHeader } from './components';

import './index.less';

const { Sider }     = Layout;

@inject('AppStore')
@observer
export default class Sidebar extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  @autobind
  handleCollapse() {
    this.store.toggleCollapsed();
  }

  render() {
    const isMobileView = this.store.getView() === 'MobileView';

    const isCollapsed = do {
      if (!isMobileView) {
        this.store.isCollapsed();
      } else {
        false;
      }
    };

    const sidebarStyle = {
      backgroundColor: this.store.getTheme('sidebar').background,
      zIndex: 2000,
      height: '100vh',
    };

    return (
      <Sider
        breakpoint='lg'
        trigger={null}
        collapsed={isCollapsed}
        onCollapse={this.handleCollapse}
        width='240'
        id='Sidebar'
        className={
          classNames({
            'MobileView': isMobileView,
            'shown': !this.store.isCollapsed(),
          })
        }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={sidebarStyle}
      >
        <div className='layers layers-start h-full'>
          <div className='layer w-100'>
            <SidebarHeader />
          </div>
          {
            do {
              if (!isCollapsed) {
                <div className='layer w-100 p-20 bgc-Blue'>
                  <Profile />
                </div>
              }
            }
          }
          <div id='SidebarMenuBox' className='layer w-100 layer-greed'>
            <Scrollbars style={{ height: '100%' }}>
              <MenuLinks />
            </Scrollbars>
          </div>
        </div>
      </Sider>
    );
  }
}
