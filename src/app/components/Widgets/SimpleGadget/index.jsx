import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';

export default class SimpleGadget extends Component {
  static propTypes = {
    title          : PropTypes.string.isRequired,
    text           : PropTypes.string.isRequired,
    icon           : PropTypes.string.isRequired,
    iconColor      : PropTypes.string,
    iconBackground : PropTypes.string,
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
      children,
    } = this.props;

    return (
      <div className='peers peers-c peers-nw p-20 bgc-White bdrs-3'>
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
            <h2>{title}</h2>
          </div>
          <div className='mT-5'>
            <h4 className='op-05'>{text}</h4>
          </div>
        </div>
        {children}
      </div>
    );
  }
}
