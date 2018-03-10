import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Radio, Icon } from 'components';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('EmailsStore')
@observer
export default class EmailBuckets extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  @autobind
  handleCheck(e) {
    this.store.setCurrentBucket(e.target.value);
    this.store.setCurrentEmail(null);
  }

  @autobind
  handleClick() {
    if (this.store.isComposeOpened()) {
      this.store.closeCompose();
    }
  }

  render() {
    const icons = [
      'inbox',
      'red-envelope',
      'save',
      'delete',
      'star',
      'close-circle',
      'like',
      'database',
      '',
    ];

    const cats = this.store.getBuckets().map((bucket, idx) => (
      <RadioButton key={bucket} value={bucket} onClick={this.handleClick}>
        <div className='peers peers-nw peers-c peers-sb'>
          <div className='peer peer-greed'>
            <Icon type={icons[idx]} />
            <span className='mL-15'>{bucket}</span>
          </div>
          <div className='peer'>
            <small>
              <b>{this.store.getBucketSize(bucket)}</b>
            </small>
          </div>
        </div>
      </RadioButton>
    ));

    return (
      <div>
        <RadioGroup
          className='w-100'
          onChange={this.handleCheck}
          defaultValue='Inbox'
        >
          {cats}
        </RadioGroup>
      </div>
    );
  }
}
