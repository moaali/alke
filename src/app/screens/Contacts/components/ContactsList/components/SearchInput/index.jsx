import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { Input } from 'components';
import './index.less';

const Search = Input.Search;

@inject('ContactsStore')
export default class SearchInput extends Component {
  static propTypes = {
    ContactsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  @autobind
  onChange(e) {
    this.store.queryContacts(e.target.value);
  }

  render() {
    return (
      <Search
        placeholder='Search Contacts'
        onChange={this.onChange}
        id='ContactsSearchInput'
      />
    );
  }
}
