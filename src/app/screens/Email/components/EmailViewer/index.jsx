import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { EmailBody, EmailControls } from './components';

@inject('EmailsStore')
@observer
export default class EmailViewer extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  render() {
    const currentEmail = this.store.getCurrentEmail();

    return (
      <div className='pos-r h-full'>
        {
          do {
            if (currentEmail) {
              <div>
                <EmailControls />
                <div className='columnMain'>
                  <Scrollbars style={{ height: '100%' }}>
                    <EmailBody />
                  </Scrollbars>
                </div>
              </div>
            } else {
              <div className='pos-a centerXY'>
                <h3 className='c-GreyShade'>Choose Email To View</h3>
              </div>
            }
          }
        }
      </div>
    );
  }
}
