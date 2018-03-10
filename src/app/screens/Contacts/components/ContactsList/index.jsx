import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SearchInput, List } from './components';
import './index.less';

@inject('ContactsStore')
@observer
export default class ContactsList extends Component {
  render() {
    return (
      <div id='ContactsList' className='bdR pos-r bgc-White'>
        <SearchInput />
        <List />
      </div>
    );
  }
}
