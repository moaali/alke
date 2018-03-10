import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import Animation from 'components/Animation';
import FormWidget from 'components/FormWidget';
import Logo from 'components/Logo';
import Helper from 'components/Helper';
import Input from 'components/UI/Input';
import Checkbox from 'components/UI/Checkbox';
import Button from 'components/UI/Button';
import BG from 'shared/static/images/bg.jpg';
import './index.less';

export default class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  @autobind
  handleLogin() {
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
            <h4 className='title ta-c mB-40'>Login</h4>

            <div className='w-100 d-f fxd-c'>
              <form action='#'  autoComplete='off'>
                <div className='mB-15'>
                  <Input size='large' placeholder='Username' />
                </div>

                <div className='mB-15'>
                  <Input size='large' type='password' placeholder='Password' />
                </div>

                <div className='mB-15 d-f jc-sb'>
                  <Checkbox>Remember me</Checkbox>
                  <Button type='primary' onClick={this.handleLogin}>
                    Login
                  </Button>
                </div>
              </form>

              <Helper>Just hit login button to enter.</Helper>

              <div className='mB-15 mT-40 pT-40 bdT bdw-0 bdwT-1 bds-dt'>
                <Button onClick={this.handleLogin} type='mB-10 primary btn-facebook w-100'>
                  Login Using Facebook
                </Button>
                <Button onClick={this.handleLogin} type='primary btn-googlePlus w-100 mT-10'>
                  Login Using Google Plus
                </Button>
              </div>
              <div className='ta-c mT-40'>
                <Link to='/forgot-password' className='mB-10 c-GreyDark cH-primary d-b'>
                  Forgot Password
                </Link>
                <Link to='/register'>Register New Account</Link>
              </div>
            </div>
          </Animation>
        </FormWidget>
      </div>
    );
  }
}
