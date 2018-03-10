import React from 'react';
import { Link } from 'react-router-dom';
import Animation from 'components/Animation';
import Button from 'components/UI/Button';
import Image from './404.png';
import './index.less';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className='pos-a t-0 l-0 bgc-White w-100 h-100 d-f fxd-r fxw-w ai-c jc-c pos-r p-30'>
        <Animation>
          <div className='mR-60'>
            <img alt='#' src={Image} />
          </div>
        </Animation>

        <Animation>
          <div className='d-f jc-c fxd-c'>
            <h1 className='mB-30 fz-jumbo fw-900 lh-1 c-Red'>404</h1>
            <h3 className='mB-10 fz-large'>Oops Page Not Found</h3>
            <p className='mB-30 fz-base'>The page you are looking for doesnot exist or has been moved.</p>
            <div>
              <Button type='primary' className='btn-big'>
                <Link to='/dashboard'>Got to Home</Link>
              </Button>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}
