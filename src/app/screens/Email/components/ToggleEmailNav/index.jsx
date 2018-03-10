import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Button } from 'components';

@inject('EmailsStore')
@observer
export default class ToggleEmailNav extends Component {
  static propTypes = {
    EmailsStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store    = this.props.EmailsStore;
  }

  @autobind
  handleToggle() {
    this.store.toggleNav();
  }

  render() {
    return (
      <Button icon='menu-unfold' onClick={this.handleToggle} type='primary' />
    );
  }
}
