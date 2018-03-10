import React, { Component } from 'react';
import { Actions, Details } from './components';
import './index.less';

export default class ContactsScreen extends Component {
  render() {
    return (
      <div id='ContactsDisplay' className='bgc-White'>
        <Actions />
        <Details />
      </div>
    );
  }
}
