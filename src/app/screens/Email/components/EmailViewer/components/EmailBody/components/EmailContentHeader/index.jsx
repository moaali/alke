import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Button } from 'components';

@inject('EmailsStore')
@observer
export default class EmailContentHeader extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  render() {
    const currentEmail = this.store.getCurrentEmail();

    return (
      <div className='peers peers-c peers-sb w-100 ov-h'>
        <div className='peer peer-greed pR-30'>
          <h3>{currentEmail.subject}</h3>
        </div>
        <div className='peer'>
          <Button
            type='primary'
            style={{
              backgroundColor: this.store.getLabelColor(currentEmail.label),
              border: '0px',
            }}
          >{currentEmail.label}</Button>
        </div>
      </div>
    );
  }
}
