import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { inject, observer } from 'mobx-react';
import ListItem from './components/ListItem';
import './index.less';

@inject('ContactsStore')
@observer
export default class List extends Component {
  static propTypes = {
    ContactsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  @autobind
  getContacts() {
    return this.store.getMatchedContacts();
  }

  render() {
    const contacts = this.getContacts();

    return (
      <Scrollbars style={{ height: '100vh' }}>
        <div>
          {
            contacts.map((contact, idx) => (
              <ListItem
                key={contact.id}
                name={contact.name}
                avatar={contact.avatar}
                hash={contact.id}
                className={idx === 0 ? 'active' : ''}
              />
            ))
          }
        </div>
      </Scrollbars>
    );
  }
}
