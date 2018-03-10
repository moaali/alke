import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Radio } from 'components';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('TodosStore')
@observer
export default class Filters extends Component {
  static propTypes = {
    className: PropTypes.string,
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
  }

  @autobind
  handleCheck(e) {
    this.store.setShown(e.target.value);
  }

  render() {
    return (
      <div className={classNames('', this.props.className)}>
        <div>
          <RadioGroup onChange={this.handleCheck} defaultValue='All'>
            <RadioButton value='All'>All</RadioButton>
            <RadioButton value='Active'>Active</RadioButton>
            <RadioButton value='Completed'>Completed</RadioButton>
          </RadioGroup>
        </div>
      </div>
    );
  }
}
