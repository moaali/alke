import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Scrollbars } from 'react-custom-scrollbars';
import { Editor, Button, Input, Notification } from 'components';
import { ToggleEmailNav } from '../../components';

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

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailComposeView extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
    this.AppStore = this.props.AppStore;
    this.state = {
      editorState: null,
      loading: false,
      iconLoading: false,
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
      style: { width: '90%', height: '70%' },
      editorState: this.state.editorState,
      toolbarClassName: 'home-toolbar',
      wrapperClassName: 'home-wrapper',
      editorClassName: 'home-editor',
      onEditorStateChange,
      uploadCallback,
      toolbar: { image: { uploadCallback } },
    };

    return (
      <div className='pos-r'>
        <Scrollbars style={{ height: '100vh' }}>
          <div className='p-30'>
            <div className='peers peers-nw peers-c mB-30'>
              {
                do {
                  if (this.AppStore.getView() !== 'DesktopView') {
                    <div className='peer mR-15'>
                      <ToggleEmailNav />
                    </div>
                  }
                }
              }
              <div className='peer'>
                <h3>Send a Message</h3>
              </div>
            </div>

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
        </Scrollbars>
      </div>
    );
  }
}
