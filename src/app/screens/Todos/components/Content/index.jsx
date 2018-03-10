import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { AddTodo, Todos } from './components';

@inject('ContactsStore')
@observer
export default class Content extends Component {
  static propTypes = {
    className: PropTypes.string,
    ContactsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  render() {
    return (
      <div className={classNames('TodosContent p-40', this.props.className)}>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}
