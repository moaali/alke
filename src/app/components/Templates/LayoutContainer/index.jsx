import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const
  LayoutContainer = props => (
    <div className={classNames('LayoutContainer fxg-1 pB-30', props.className)}>
      {props.children}
    </div>
  );

const
  ReactComponent = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired;

LayoutContainer.propTypes = {
  children  : ReactComponent,
  className : PropTypes.string,
};

export default LayoutContainer;
