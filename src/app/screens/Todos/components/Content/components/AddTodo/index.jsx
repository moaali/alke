import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Input } from 'components';
import './index.less';

@inject('TodosStore')
@observer
export default class AddTodo extends Component {
  static propTypes = {
    className: PropTypes.string,
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
  }

  @autobind
  handleChange(e) {
    if (this.store.isEdit()) {
      this.store.editTodo(this.store.getEditTodoId(), e.target.value);
    }
  }

  @autobind
  handlePressEnter(e) {
    if (this.store.isEdit()) {
      this.store.toggleEditMode();
    } else {
      this.store.addTodo(e.target.value);
    }

    e.target.value = '';
  }

  render() {
    const condProp = {
      ...(
        this.store.isEdit() && {
          value: this.store.getTodo(
            this.store.getTodos(), this.store.getEditTodoId()
          ).todo,
        }
      ),
    };

    return (
      <div className={classNames('', this.props.className)}>
        <Input
          placeholder={'Type and hit enter to add todo...'}
          onChange={this.handleChange}
          onPressEnter={this.handlePressEnter}
          className='addTodoInput mB-40'
          {...condProp}
        />
      </div>
    );
  }
}
