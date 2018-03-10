import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import './index.less';

@inject('AppStore')
@observer
class Trigger extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  @autobind
  handleClick() {
    this.store.toggleCollapsed();

    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    setTimeout(() => {
      window.dispatchEvent(window.EVENT);
    }, 300);
  }

  render() {
    return (
      <button className='btn-trigger' onClick={this.handleClick}>
        <span className='bar' />
        <span className='bar' />
        <span className='bar' />
      </button>
    );
  }
}

export default Trigger;
