import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const
  PageTitle = props => <h1 className='PageTitle mB-30 tt-c'>{props.children}</h1>;

const
  ReactComponent = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired;

PageTitle.propTypes = {
  children  : ReactComponent,
};

export default PageTitle;
