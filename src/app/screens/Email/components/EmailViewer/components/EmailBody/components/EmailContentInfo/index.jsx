import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import moment from 'moment';

@inject('EmailsStore')
@observer
export default class EmailContentInfo extends Component {
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
      <div className='peers peers-sb peers-nw'>
        <div className='peers peer-greed'>
          <div className='peer'>
            <img
              src={currentEmail.avatar}
              alt={currentEmail.name}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                marginRight: '15px',
              }}
            />
          </div>
          <div className='peer'>
            <h4>{currentEmail.name}</h4>
            <p className='c-GreyShade'>{currentEmail.email}</p>
            <p>to <b>me</b></p>
          </div>
        </div>
        <div className='peer'>
          <small>{moment(currentEmail.date).fromNow()}</small>
        </div>
      </div>
    );
  }
}
