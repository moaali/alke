import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { EmailHeader, EmailItems, EmailSearch } from './components';
import './index.less';

@inject('EmailsStore')
@observer
export default class EmailList extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.EmailsStore = this.props.EmailsStore;
  }

  render() {
    return (
      <div id='emailsList' className='layers layers-start h-full'>
        <div className='w-100 layer'>
          <EmailHeader />
        </div>
        <div className='w-100 layer'>
          <EmailSearch />
        </div>
        <div
          className='w-100 layer layer-greed'
          style={{
            height: 'calc(100vh - 122px)',
          }}
        >
          <Scrollbars style={{ height: '100%' }}>
            <EmailItems />
          </Scrollbars>
        </div>
      </div>
    );
  }
}
