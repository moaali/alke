import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WellTitle from '../WellTitle';
import './index.less';

const
  Well = props => (
    <div className={classNames('Well bgc-White', props.className)}>
      <WellTitle title={props.title} subtitle={props.subtitle} />
      {props.children}
    </div>
  );

const
  ReactComponent = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired;

Well.propTypes = {
  children  : ReactComponent,
  title     : PropTypes.string,
  subtitle  : PropTypes.string,
  className : PropTypes.string,
};


export default Well;
