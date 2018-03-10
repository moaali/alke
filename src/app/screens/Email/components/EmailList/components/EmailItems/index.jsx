import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import moment from 'moment';
import { Radio } from 'components';
import './index.less';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailItems extends Component {
  static propTypes = {
    EmailsStore : PropTypes.object,
    AppStore    : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store    = this.props.EmailsStore;
    this.AppStore = this.props.AppStore;
  }

  @autobind
  handleCheck(e) {
    this.store.setCurrentEmail(e.target.value);
    if (this.AppStore.getView() === 'MobileView') {
      this.store.toggleViewer();
    }
  }

  render() {
    const emails = this.store.getShown().map(email => (
      <RadioButton value={email.id} className='d-b w-100 emailListItem pos-r' key={email.subject}>
        <div
          className='peer emailColorStrip'
          style={{
            backgroundColor: this.store.getLabelColor(email.label),
          }}
        />
        <div className='peers peers-nw peer-greed'>
          <div className='peer'>
            <img className='emailAvatar' src={email.avatar} alt={email.name} />
          </div>
          <div className='peer peer-greed'>
            <span className='fz-base fw-700'>{email.name}</span>
            <p className='w-100 whs-nw ov-h tov-e pR-15 fw-500'>
              {email.subject}
            </p>
          </div>
        </div>
        <div className='peer whs-nw'>
          <small>{moment(email.date).fromNow()}</small>
        </div>
      </RadioButton>
    ));

    return (
      <div>
        <RadioGroup className='w-100' onChange={this.handleCheck} defaultValue='' value={this.store.getCurrentEmail() ? this.store.getCurrentEmail().id : ''}>
          {emails}
        </RadioGroup>
      </div>
    );
  }
}
