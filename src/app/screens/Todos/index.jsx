import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Content, Header } from './components';

@inject('TodosStore')
@observer
export default class TodosScreen extends Component {
  static propTypes = {
    TodosStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.TodosStore;
  }

  render() {
    return (
      <div className='bgc-White'>
        <Header />
        <Content />
      </div>
    );
  }
}
