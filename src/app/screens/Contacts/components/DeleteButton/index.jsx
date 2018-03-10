import React, { Component } from 'react';
import classNames from 'classnames';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { Popconfirm, Button, Notification } from 'components';

@inject('ContactsStore')
export default class DeleteButton extends Component {
  static propTypes = {
    className     : PropTypes.string,
    hash          : PropTypes.string,
    ContactsStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  @autobind
  getName() {
    return this.store.getContactInfo(this.props.hash, 'name') || 'Anonymous';
  }

  @autobind
  handleDelConfirm() {
    Notification('error', `${this.getName()} Deleted`, '');
    this.store.deleteContact(this.props.hash);
  }

  render() {
    const DEL = (
      <Button icon='close' type='button' className={classNames(this.props.className)} />
    );
    return (
      do {
        if (this.store.isEditMode()) {
          {DEL}
        } else {
          <Popconfirm
            title={`You are about to delete ${this.getName()}!`}
            okText='Proceed'
            cancelText='Cancel'
            onConfirm={this.handleDelConfirm}
          >
            {DEL}
          </Popconfirm>
        }
      }
    );
  }
}
