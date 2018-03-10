import React, { Component } from 'react';
import faker from 'faker';
import './index.less';

export default class SocialProfile extends Component {
  render() {
    return (
      <div className='layers layers-start ov-h bdrs-3 bgc-White'>
        <div className='layer w-100 pX-30 pT-30 pB-90 bgc-Purple c-White'>
          <h2 className='c-White'>John Doe</h2>
          <p>Sales Manager</p>
        </div>
        <div className='layer as-c'>
          <img
            src={faker.image.avatar()}
            width={120}
            height={120}
            className='bdrs-50'
            alt={'John Doe'}
            style={{
              marginTop: '-60px',
            }}
          />
        </div>
        <div className='layer w-100'>
          <div className='profileStats peers peers-greed peers-nw ai-s ta-c mY-30'>
            <div className='peer pX-30 bdR'>
              <h4>Followers</h4>
              <p>123</p>
            </div>
            <div className='peer pX-30 bdR'>
              <h4>Likes</h4>
              <p>321</p>
            </div>
            <div className='peer pX-30 bdR'>
              <h4>Following</h4>
              <p>456</p>
            </div>
            <div className='peer pX-30'>
              <h4>Post</h4>
              <p>56</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
