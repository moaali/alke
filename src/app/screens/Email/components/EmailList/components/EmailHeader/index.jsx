import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import classNames from 'classnames';
import { Button } from 'components';
import { ToggleEmailNav } from '../../../../components';

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailsHeader extends Component {
  static propTypes = {
    EmailsStore : PropTypes.object,
    AppStore    : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store    = this.props.EmailsStore;
    this.AppStore = this.props.AppStore;
  }

  @autobind
  handleToggle() {
    this.store.toggleNav();
  }

  render() {
    return (
      <div className='peers peers-c peers-nw emailTop bdB'>
        <div
          className={
            classNames('peer mR-15', {
              'd-n': this.AppStore.getView() === 'DesktopView',
            })
          }
        >
          <ToggleEmailNav />
        </div>
        <div className='peer peer-greed'>
          <h3>{this.store.getCurrentBucket()}</h3>
        </div>
        <div className='peer'>
          <Button icon='left' type='ghost' className='mR-5' />
          <Button icon='right' type='ghost' />
        </div>
      </div>
    );
  }
}
