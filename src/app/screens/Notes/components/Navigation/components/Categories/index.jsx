import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import md5 from 'js-md5';
import { inject, observer } from 'mobx-react';
import { Radio, Icon } from 'components';
import './index.less';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('NotesStore')
@observer
export default class Categories extends Component {
  static propTypes = {
    className  : PropTypes.string,
    NotesStore : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.NotesStore;
  }

  @autobind
  handleCheck(e) {
    this.store.setCurrentCategory(e.target.value);
  }

  render() {
    const { store } = this;

    const cats = store.getCategories().map((cat, idx) => (
      <RadioButton key={md5(cat + idx)} value={cat.name} className='peers peers-nw peers-c'>
        <div className='peer peer-greed'>
          <Icon type='filter' />
          <span className='mL-15'>{cat.name}</span>
        </div>
        <div className='peer'>
          <span className='mR-10 label' style={{ 'background': cat.color }} />
          <span>{store.countNotes(cat.name)}</span>
        </div>
      </RadioButton>
    ));

    return (
      <div id='NotesCategories' className={classNames('', this.props.className)}>
        <RadioGroup className='w-100' onChange={this.handleCheck} defaultValue='All'>
          <RadioButton value='All' className='peers peers-nw peers-c'>
            <div className='peer peer-greed'>
              <Icon type='filter' />
              <span className='mL-15'>All</span>
            </div>
            <div className='peer'>
              <span>{store.countNotes()}</span>
            </div>
          </RadioButton>
          {cats}
        </RadioGroup>
      </div>
    );
  }
}
