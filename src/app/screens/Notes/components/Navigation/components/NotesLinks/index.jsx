import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import { inject, observer } from 'mobx-react';
import { Icon } from 'components';
import './index.less';

@inject('NotesStore')
@observer
export default class NotesList extends Component {
  static propTypes = {
    NotesStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  @autobind
  handleClick(e) {
    const
      { target } = e,
      { store }  = this;

    target.classList.contains('NotesListItemInner')
      ? store.setCurrentNote(target.id)
      : store.setCurrentNote(target.closest('.NotesListItemInner').getAttribute('id'));
  }

  @autobind
  handleDelete(e) {
    this.store.delNote(e.target.getAttribute('rel'));
  }

  render() {
    const { store, props, handleClick, handleDelete } = this;

    const shownItems = store.getShown().map(note => (
      <div
        key={note.id}
        className={classNames('peers peers-nw NotesListItem', {
          'active': note.id === store.getCurrentNote().id,
        })}
        {...(note.id === store.getCurrentNote().id && {
          style: {
            'backgroundColor': store.getCategoryColor(note.category),
          },
        })}
      >
        <div
          onClick={handleClick}
          id={note.id}
          className='peers peer-greed ai-s NotesListItemInner p-20'
        >
          <div
            className='peer NoteListItemColor'
            style={{
              'backgroundColor': store.getCategoryColor(note.category),
            }}
          />
          <div className='peer peer-greed'>
            <small>{moment(note.date).format('MMM DD, YYYY')}</small>
            <p className='w-100 NoteListItemText'>{note.content}</p>
          </div>
        </div>
        <div className='peer'>
          <Icon className='actionIcon mT-20 mR-20' type='close' onClick={handleDelete} rel={note.id} />
        </div>
      </div>
    ));

    return (
      <Scrollbars style={{ height: '100%' }}>
        <div className={classNames('', props.className)}>{shownItems}</div>
      </Scrollbars>
    );
  }
}
