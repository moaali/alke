import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import md5 from 'js-md5';
import moment from 'moment';
import { inject, observer } from 'mobx-react';
import { Checkbox, Button }  from 'components';
import './index.less';

@inject('TodosStore')
@observer
export default class Todos extends Component {
  static propTypes = {
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
  }

  @autobind
  handleEdit(e) {
    this.store.toggleEditMode();
    this.store.setEditTodoId(e.target.value);
  }

  @autobind
  handleDelete(e) {
    this.store.deleteTodo(e.target.value);
  }

  @autobind
  handleTodoCheck(e) {
    this.store.toggleCompleted(e.target.value);
  }

  render() {
    return (
      <div>
        {
          this.store.getShown().map(todo => (
            <div
              className={
                classNames(
                  'TodoItem mB-1 p-30', {
                    'completed': todo.completed,
                    'editing': this.store.isEdit() && this.store.getEditTodoId() === todo.id,
                  }
                )
              }
              key={md5(todo.id)}
            >
              <div className='peers gutter-15'>
                <div className='peer'>
                  <Checkbox
                    value={todo.id}
                    checked={todo.completed}
                    onChange={this.handleTodoCheck}
                  />
                </div>
                <div className='peer-greed'>
                  <div className='mB-5'>
                    <small>{moment(todo.createTime).format('MMM DD, YYYY')}</small>
                  </div>
                  <div>
                    <p>{todo.todo}</p>
                  </div>
                </div>
                <div className='peers'>
                  <div className='peer mR-5'>
                    <Button value={todo.id} onClick={this.handleEdit} shape='circle' icon='edit' className='bdrs-50' />
                  </div>
                  <div className='peer'>
                    <Button value={todo.id} onClick={this.handleDelete} shape='circle' icon='delete' type='danger' className='bdrs-50' />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
