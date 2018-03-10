import React from 'react';
import PropTypes from 'prop-types';

const
  WellTitle = props => (
    <div className='cardHeader p-20'>
      {props.title ? <h3 className='wellTitle mB-10'> {props.title} </h3> : ''}
      {props.subtitle ? <p className='wellSubTitle'> {props.subtitle} </p> : ''}
    </div>
  );

WellTitle.propTypes = {
  title    : PropTypes.string,
  subtitle : PropTypes.string,
};

export default WellTitle;
