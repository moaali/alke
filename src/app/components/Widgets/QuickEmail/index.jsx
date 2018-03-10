import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Editor, Button, Input, Notification } from 'components';

function uploadCallback(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

export default class QuickEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState : null,
      loading     : false,
      iconLoading : false,
    };
  }

  @autobind
  handleSend() {
    Notification('success', 'Your Message is Sent Successfully.', '');
  }

  render() {
    const onEditorStateChange = (editorState) => {
      this.setState({ editorState });
    };

    const editorOption = {
      onEditorStateChange,
      uploadCallback,
      style            : { width : '90%', height : '70%' },
      editorState      : this.state.editorState,
      toolbarClassName : 'home-toolbar',
      wrapperClassName : 'home-wrapper',
      editorClassName  : 'home-editor',
      toolbar          : { image : { uploadCallback } },
    };

    return (
      <div className='layers layers-start bgc-White bdrs-3'>
        <div className='layer w-100 pX-20 pY-10 bdB'>
          <h4>Quick Email</h4>
        </div>
        <div className='layer w-100 p-20'>
          <div className='mB-15'>
            <Input type='text' placeholder='To' />
          </div>

          <div className='mB-15'>
            <Input type='text' placeholder='CC' />
          </div>

          <div className='mB-15'>
            <Input type='text' placeholder='BCC' />
          </div>

          <div className='mB-15'>
            <Input type='text' placeholder='Subject of Email' />
          </div>

          <Editor {...editorOption} />

          <Button type='primary' className='mT-30' onClick={this.handleSend}>Send</Button>
        </div>
      </div>
    );
  }
}
