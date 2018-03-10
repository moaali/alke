import React, { Component } from 'react';
import { Display, ContactsList } from './components';
import './index.less';

export default class ContactsScreen extends Component {
  render() {
    return (
      <div id='ContactsScreen' className='peers'>
        <div className='peer'><ContactsList /></div>
        <div className='peer peer-greed'><Display /></div>
      </div>
    );
  }
}
