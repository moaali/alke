import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Input } from 'components';
import './index.less';

@inject('EmailsStore')
@observer
export default class EmailsSearch extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  @autobind
  handleChange(e) {
    this.store.setSearchQuery(e.target.value);
  }

  render() {
    return (
      <div>
        <Input
          id='emailSearch'
          type='text'
          onChange={this.handleChange}
          placeholder='Search Emails...'
        />
      </div>
    );
  }
}
