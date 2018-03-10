import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const
  ButtonGroup = Button.Group;

const
  withButton =  props => (
    <Button {...props}>
      {props.children}
    </Button>
  );

withButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default withButton;
export { ButtonGroup };
