import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import {
  EmailContent,
  EmailContentHeader,
  EmailContentInfo,
  EmailContentReply,
} from './components';

@inject('EmailsStore')
@observer
export default class EmailBody extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  render() {
    return (
      <div className='p-30'>
        <div className='pY-30 bdB'>
          <EmailContentHeader />
        </div>
        <div className='pY-30 bdB'>
          <EmailContentInfo />
        </div>
        <div className='pY-30 bdB'>
          <EmailContent />
        </div>
        <div className='pY-30'>
          <EmailContentReply />
        </div>
      </div>
    );
  }
}
