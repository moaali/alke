import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Actions, NotesContent } from './components';
import './index.less';

@inject('NotesStore')
@observer
export default class View extends Component {
  static propTypes = {
    className  : PropTypes.string,
    NotesStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  render() {
    return (
      <div id='NotesView' className={classNames('', this.props.className)}>
        <div className='layers h-full'>
          <Actions className='layer w-100' />
          <NotesContent className='layer w-100 fxg-1' />
        </div>
      </div>
    );
  }
}
