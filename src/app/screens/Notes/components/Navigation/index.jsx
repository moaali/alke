import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Categories, NotesLinks, Search } from './components';
import './index.less';

export default class Navigation extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    return (
      <div id='NotesNav' className={classNames('ai-s', this.props.className)}>
        <Categories id='NotesNav' className='peer' />
        <div className='peer peer-greed'>
          <div className='layers h-100 layers-start'>
            <div className='layer w-100'>
              <Search />
            </div>
            <div id='NotesLinksBox' className='layer-greed w-100'>
              <NotesLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
