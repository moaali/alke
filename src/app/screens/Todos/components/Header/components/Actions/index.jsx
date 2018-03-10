import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Checkbox, Button } from 'components';

@inject('TodosStore')
@observer
export default class Actions extends Component {
  static propTypes = {
    className: PropTypes.string,
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
    this.state = {
      completeAll: false,
    };
  }

  @autobind
  handleDelete() {
    this.store.deleteCompleted();
  }

  @autobind
  handleCheck(e) {
    if (e.target.checked) {
      this.store.completeAll();
      this.setState({
        completeAll: true,
      });
    }
  }

  render() {
    const condCheckProps = {
      ...(this.state.completeAll && { disabled: true }),
    };

    const completedTodosSize = (
      <span>({this.store.countCompleted()})</span>
    );

    return (
      <div className={classNames('TodosActions gutter-15 peers peers-c', this.props.className)}>
        <div className='TodosAction peer'>
          <Checkbox
            onChange={this.handleCheck}
            {...condCheckProps}
          >
            Mark All As Completed
          </Checkbox>
        </div>
        <div className='TodosAction peer'>
          <Button type='primary bgc-Red bgcH-Red' onClick={this.handleDelete}>
            Delete All Completed {completedTodosSize}
          </Button>
        </div>
      </div>
    );
  }
}
