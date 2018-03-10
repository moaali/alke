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

export default class ForgotPassword extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  @autobind
  handleSend() {
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
            <h4 className='title ta-c mB-40'>Forgot Password</h4>

            <div className='w-100 d-f fxd-c'>
              <form action='#'  autoComplete='off'>
                <div className='mB-15'>
                  <h3>Forgot Password?</h3>
                  <p>Type Email to send password to.</p>
                </div>

                <div className='mB-15'>
                  <Input size='large' placeholder='Email' type='email' />
                </div>

                <div className='mB-15'>
                  <Button type='primary' onClick={this.handleSend} className='w-100 btn-big'>
                    Send Password
                  </Button>
                </div>
              </form>
              <div className='ta-c mT-40'>
                <Link to='/' className='mB-10 d-b'>Login to Account</Link>
                <Link to='/register'>Register New Account</Link>
              </div>
            </div>
          </Animation>
        </FormWidget>
      </div>
    );
  }
}
