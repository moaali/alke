import React, { Component } from 'react';
import { Navigation, View } from './components';
import './index.less';

export default class NotesScreen extends Component {
  render() {
    return (
      <div id='NotesBox' className='peers peers-nw ai-s'>
        <Navigation className='peers bgc-White peers-nw' />
        <View className='peer peer-greed bgc-White' />
      </div>
    );
  }
}
