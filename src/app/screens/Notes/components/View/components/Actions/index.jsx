import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import md5 from 'js-md5';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Button, Radio } from 'components';
import './index.less';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('NotesStore')
@observer
export default class Actions extends Component {
  static propTypes = {
    NotesStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  @autobind
  handleAdd() {
    this.store.addNote('New Note');
  }

  @autobind
  handleCheck(e) {
    const { name, value } = e.target;
    this.store.setNoteProp(name, 'category', value);
  }

  render() {
    const { store, handleCheck, handleAdd, props } = this;
    const note = store.getCurrentNote();
    const
      RadioButtons = (
        <RadioGroup onChange={handleCheck} defaultValue={note.category} value={note.category}>
          {
            store.getCategories().map((cat, idx) => (
              <RadioButton
                key={md5(cat + idx)}
                name={note.id}
                value={cat.name}
                className='NotesColorRadio'
                style={{
                  'color': cat.color,
                  'backgroundColor': cat.color,
                }}
              />
            ))
          }
        </RadioGroup>
      );

    return (
      <div id='NotesActions' className={classNames('NotesActions peers peers-sb peers-c', props.className)}>
        <div className='peer'>
          <div className='peers'>{RadioButtons}</div>
        </div>
        <div className='peers'>
          <div className='peer'>
            <Button type='primary' onClick={handleAdd}>Add Note</Button>
          </div>
        </div>
      </div>
    );
  }
}
