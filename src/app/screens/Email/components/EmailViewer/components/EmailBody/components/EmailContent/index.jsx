import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('EmailsStore')
@observer
export default class EmailContent extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  render() {
    const currentEmail = this.store.getCurrentEmail();
    const emailBody = (currentEmail && currentEmail.body) || null;

    return (
      <div>
        <p>{emailBody}</p>
      </div>
    );
  }
}
