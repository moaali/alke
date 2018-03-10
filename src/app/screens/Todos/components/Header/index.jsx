import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Actions, Filters } from './components';
import './index.less';

@inject('TodosStore')
@observer
export default class Sidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
  }

  render() {
    return (
      <div
        className={
          classNames('TodosHeader peers peers-c peers-sb p-15 bdB', this.props.className)
        }
      >
        <Filters className='peer' />
        <Actions />
      </div>
    );
  }
}
