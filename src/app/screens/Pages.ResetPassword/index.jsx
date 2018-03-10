import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import Animation from 'components/Animation';
import FormWidget from 'components/FormWidget';
import Logo from 'components/Logo';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import BG from 'shared/static/images/bg.jpg';
import './index.less';

export default class ResetPassword extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  @autobind
  handleSave() {
    this.props.history.push('/dashboard');
  }

  render() {
    const holderStyle = {
      backgroundImage: `url(${BG})`,
    };

    return (
      <div className='pos-a t-0 l-0 d-f jc-fe ai-c h-100 w-100 bgsz-cv bgr-n hasOverlay' style={holderStyle}>
        <Logo className='Logo-rounded Logo-inSplitted fxg-1 d-f jc-c' />

        <FormWidget>
          <Animation>
            <h4 className='title ta-c mB-40'>Reset Password</h4>

            <div className='w-100 d-f fxd-c'>
              <form action='#'  autoComplete='off'>
                <div className='mB-15'>
                  <h3>Reset Password</h3>
                  <p>Enter new password and confirm it.</p>
                </div>

                <div className='mB-15'>
                  <Input size='large' placeholder='Old Password' type='password' />
                </div>

                <div className='mB-15'>
                  <Input size='large' placeholder='New Password' type='password' />
                </div>

                <div className='mB-15'>
                  <Input size='large' placeholder='Confirm New Password' type='password' />
                </div>

                <div className='mB-15'>
                  <Button type='primary' onClick={this.handleSave} className='w-100 btn-big'>
                    Save New Password
                  </Button>
                </div>
              </form>
            </div>
          </Animation>
        </FormWidget>
      </div>
    );
  }
}
