import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Editor, Button } from 'components';

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

@inject('EmailsStore')
@observer
export default class EmailContentReply extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
    this.state = {
      editorState: null,
      loading: false,
      iconLoading: false,
    };
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
      <div>
        <Editor {...editorOption} />
        <Button type='primary' className='mT-30'>Send</Button>
      </div>
    );
  }
}
