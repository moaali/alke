import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Popconfirm } from 'components';
import DeleteButton from '../../../../../DeleteButton';
import './index.less';

@inject('ContactsStore')
@observer
export default class ListItem extends Component {
  static propTypes = {
    className     : PropTypes.string,
    avatar        : PropTypes.string,
    hash          : PropTypes.string,
    ContactsStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  @autobind
  handleClick(e) {
    this.store.setShown(this.props.hash);
    if (ReactDOM.findDOMNode(this).contains(e.target)) {
      [].slice
        .call(document.getElementsByClassName('ConactListItem'))
        .forEach(element => {
          element.classList.remove('active');
        });

      ReactDOM
        .findDOMNode(this)
        .classList
        .add('active');
    }
  }

  @autobind
  handleConfirm() {
    this.store.save();
    this.store.toggleEditMode();
    this.store.setShown(this.props.hash);
  }

  @autobind
  handleCancel() {
    this.store.resetContacts();
    this.store.toggleEditMode();
    this.store.setShown(this.props.hash);
  }

  render() {
    const { getContactName } = this.store;
    const { avatar, hash } = this.props;
    const condProp = {
      ...(!this.store.isEditMode() && { onClick: this.handleClick }),
    };

    const ITEM = (
      <div
        className={
          classNames('ConactListItem peers peers-c peers-sb peers-nw pR-15 bdB', this.props.className)
        }
      >
        <a {...condProp} className='peer peer-greed p-15'>
          <div className='peers peers-c peers-nw'>
            <div className='peer mR-10'>
              {avatar ? <img className='ConactListAvatar va-m' alt={getContactName(hash)} src={avatar} /> : ''}
            </div>
            <div className='peer'>
              <h4>{getContactName(hash) || 'Anonymous'}</h4>
            </div>
          </div>
        </a>
        <DeleteButton className='ListItemDelButton' hash={hash} />
      </div>
    );

    return (
      do {
        if (this.store.isEditMode()) {
          <Popconfirm
            title='Do you want to save current changes ?'
            okText='Save'
            cancelText='Cancel'
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          >
            {ITEM}
          </Popconfirm>
        } else {
          {ITEM}
        }
      }
    );
  }
}
