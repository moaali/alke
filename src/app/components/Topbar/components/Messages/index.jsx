import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import Popover from 'components/UI/Popover';
import Badge from 'components/UI/Badge';
import { MdMessage } from 'react-icons/lib/md';

@inject('NewMessagesStore')
@observer
class Messages extends Component {
  static propTypes = {
    NewMessagesStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NewMessagesStore;
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
          <h3>New Messages</h3>
        </div>
        <div className='dropdownBody'>
          <Scrollbars>
            {this.store.getMessages().map(message => (
              <a className='dropdownListItem' key={message.id}>
                <div className='imgWrapper'>
                  <img alt='#' src={message.img} />
                </div>

                <div className='listContent'>
                  <div className='listHead'>
                    <h5>
                      {message.name}
                    </h5>
                    <span className='date'>
                      {message.time}
                    </span>
                  </div>
                  <p>
                    {message.message}
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
          <Badge count={this.store.countMessages()}>
            <MdMessage className='topbarIcon' />
          </Badge>
        </div>
      </Popover>
    );
  }
}

export default Messages;
