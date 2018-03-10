import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import Popover from 'components/UI/Popover';
import Badge from 'components/UI/Badge';
import { MdNotifications } from 'react-icons/lib/md';

@inject('NotificationsStore')
@observer
class Notifications extends Component {
  static propTypes = {
    NotificationsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotificationsStore;
    this.state = {
      visible: false,
    };
  }

  @autobind
  hide() {
    this.setState({ visible: false });
  }

  @autobind
  handleVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    const content = (
      <div className='dropdownContent withImg'>
        <div className='dropdownHeader'>
          <h3>Notifications</h3>
        </div>
        <div className='dropdownBody'>
          <Scrollbars>
            {this.store.getNotifications().map(notification => (
              <a className='dropdownListItem' key={notification.id}>
                <div className='listContent'>
                  <div className='listHead'>
                    <h5>
                      {notification.name}
                    </h5>
                  </div>
                  <p>
                    {notification.message}
                  </p>
                </div>
              </a>
            ))}
          </Scrollbars>
        </div>
        <a className='viewAllBtn'>View All</a>
      </div>
    );
    return (
      <Popover
        content={content}
        trigger='click'
        visible={this.state.visible}
        onVisibleChange={this.handleVisibility}
      >
        <div className='iconWrapper'>
          <Badge count={this.store.countNotifications()}>
            <MdNotifications className='topbarIcon' />
          </Badge>
        </div>
      </Popover>
    );
  }
}

export default Notifications;
