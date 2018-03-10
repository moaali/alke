import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('NotesStore')
@observer
export default class NotesContent extends Component {
  static propTypes = {
    className  : PropTypes.string,
    NotesStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  @autobind
  handleChange(e) {
    this.store.setNoteProp(e.target.name, 'content', e.target.value);
  }

  render() {
    const note = this.store.getCurrentNote();

    return (
      <div id='NotesContent' className={classNames('pos-r', this.props.className)}>
        <textarea
          onChange={this.handleChange}
          cols='30'
          rows='10'
          name={note.id}
          value={note.content}
          className='pos-a w-100 h-full p-15 bdw-0'
          style={{
            resize: 'none',
          }}
        />
      </div>
    );
  }
}
