import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Progress } from '../../../components';
import './index.less';

export default class ProgressGadget extends Component {
  static propTypes = {
    title           : PropTypes.string.isRequired,
    progressPercent : PropTypes.number.isRequired,
    text            : PropTypes.string.isRequired,
    icon            : PropTypes.string.isRequired,
    iconColor       : PropTypes.string,
    iconBackground  : PropTypes.string,
    progressStatus  : PropTypes.string,
    progressStroke  : PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  render() {
    const {
      title,
      icon,
      iconColor,
      iconBackground,
      text,
      progressPercent,
      progressStatus,
      progressStroke,
      children,
    } = this.props;

    return (
      <div className='peers peers-c peers-nw ProgressGadget bdrs-3'>
        <div className='peer mR-20'>
          <div
            className='gadgetIconBox'
            style={{
              background: iconBackground || '#108ee9',
              color: iconColor || '#fff',
            }}
          >
            <Icon type={icon} />
          </div>
        </div>
        <div className='peer peer-greed'>
          <div>
            <h4>{title}</h4>
          </div>
          <div className='mT-5'>
            <p>{text}</p>
          </div>
          <div>
            <Progress
              percent={progressPercent}
              strokeWidth={progressStroke || 5}
              status={progressStatus || 'active'}
            />
          </div>
        </div>
        {children}
      </div>
    );
  }
}
