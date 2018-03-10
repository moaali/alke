import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Button } from 'components';
import './index.less';

@inject('EmailsStore')
@observer
export default class EmailCompose extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.EmailsStore = this.props.EmailsStore;
  }

  @autobind
  handleClick() {
    this.EmailsStore.openCompose();
  }

  render() {
    return (
      <div className='w-100'>
        <Button id='emailComposeBtn' type='primary' onClick={this.handleClick}>Compose</Button>
      </div>
    );
  }
}
