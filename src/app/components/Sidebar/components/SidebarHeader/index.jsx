import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Logo } from 'components';
import './index.less';

@inject('AppStore')
@observer
export default class SidebarHeader extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  render() {
    return (
      <div className='logo d-f ai-c bgc-Blue'>
        <div className='pY-15' style={{ width: '68px' }}>
          <Logo width={30} height={30} />
        </div>

        {!this.store.isCollapsed() && <h1 className='logoText pY-15 tt-u fz-large'>Alke</h1>}
      </div>
    );
  }
}
