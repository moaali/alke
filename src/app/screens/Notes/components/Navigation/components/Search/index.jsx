import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Input } from 'components';
import './index.less';

@inject('NotesStore')
@observer
export default class Search extends Component {
  static propTypes = {
    className  : PropTypes.string,
    NotesStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  @autobind
  handleChange(e) {
    this.store.setQuery(e.target.value);
  }

  render() {
    return (
      <div id='NotesSearch' className={classNames('', this.props.className)}>
        <Input
          type='text'
          placeholder='Type to search notes...'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
