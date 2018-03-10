import React, { Component } from 'react';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mail from 'components/Topbar/components/Mail';
import Messages from 'components/Topbar/components/Messages';
import Notifications from 'components/Topbar/components/Notifications';
import Search from 'components/Topbar/components/Search';
import Trigger from 'components/Topbar/components/Trigger';
import './index.less';

const { Header } = Layout;

@inject('AppStore')
@observer
export default class Topbar extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  render() {
    const isMobileView = this.store.getView() === 'MobileView';

    return (
      <Header
        className={classNames('Topbar bdB peers peers-sb peers-nw peers-c pos-f l-0 t-0 z-1', {
          collapsed: this.store.isCollapsed(),
          MobileView: isMobileView,
        })}
      >
        <div className='peer'>
          <Trigger />
        </div>

        <div className='peer'>
          <div className='peers peers-c'>
            <div className='peer'>
              <Search />
            </div>
            <div className='peer'>
              <Mail />
            </div>
            <div className='peer'>
              <Notifications />
            </div>
            <div className='peer'>
              <Messages />
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
