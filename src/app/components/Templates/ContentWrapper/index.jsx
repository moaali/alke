import React from 'react';
import PropTypes from 'prop-types';

const
  ContentWrapper = props => (
    <div className='ContentWrapper p-20' {...props}>
      {props.children}
    </div>
  );

const
  ReactComponent = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired;

ContentWrapper.propTypes = {
  children : ReactComponent,
};

export default ContentWrapper;
