import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import { EmailCompose, EmailBuckets, EmailLabels } from './components';
import './index.less';

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailNavigation extends Component {
  static propTypes = {
    EmailsStore : PropTypes.object,
    AppStore    : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.EmailsStore = this.props.EmailsStore;
    this.AppStore    = this.props.AppStore;
  }

  @autobind
  handleNavClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div id='emailNav' onClick={this.handleNavClick}>
        <div className='d-f ai-c emailTop bdB'>
          <EmailCompose />
        </div>
        <div className='columnMain'>
          <Scrollbars style={{ height: '100%' }}>
            <div className='mY-30 pX-30'>
              <EmailBuckets />
            </div>
            <div className='pX-30 pB-30'>
              <EmailLabels />
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}
