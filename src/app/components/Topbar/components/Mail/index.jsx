import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import Popover from 'components/UI/Popover';
import Badge from 'components/UI/Badge';

import { MdEmail } from 'react-icons/lib/md';

import './index.less';

@inject('NewMailStore')
@observer
class Mail extends Component {
  static propTypes = {
    NewMailStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NewMailStore;
    this.state = {
      visible: false,
    };
  }

  @autobind
  handleClick() {

  }

  hide() {
    this.setState({ visible: false });
  }

  @autobind
  handleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <div className='dropdownContent'>
        <div className='dropdownHeader'>
          <h3>New Mails</h3>
        </div>
        <div className='dropdownBody'>
          <Scrollbars>
            {this.store.getMails().map(mail => (
              <Link to={'/mailbox'} onClick={this.hide} key={mail.id}>
                <div className='dropdownListItem'>
                  <div className='listHead'>
                    <h5>
                      {mail.name}
                    </h5>
                    <span className='date'>
                      {mail.time}
                    </span>
                  </div>
                  <p>
                    {mail.desc}
                  </p>
                </div>
              </Link>
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
          <Badge count={this.store.countMails()}>
            <MdEmail className='topbarIcon c-GreyDark' />
            <span className='head-example' />
          </Badge>
        </div>
      </Popover>
    );
  }
}

export default Mail;
